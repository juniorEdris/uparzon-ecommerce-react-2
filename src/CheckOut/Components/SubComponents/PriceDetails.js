/* eslint-disable no-self-compare */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PopUp } from '../../../PrimarySections/SectionUtils/PopUp';
import {  get_singleProd_campaign_price_count} from '../../../PrimarySections/Utility';
import { API, api_key, ENDPOINTS } from '../../../PrimarySections/Utility/API_Links';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import { PlaceOrder, PlaceOrderClearMsg } from '../../../Redux/Action/PlaceOrderAction';

const PriceDetails = (props) => {
  const [offer, setOffer] = useState({
    price:'',
    percentage:'',
  });
  const [error, setError] = useState('');
  useEffect(() => {
    setOffer({
      price:'',
      percentage:'',
    });
    setError('')
  }, []);
  const [coupon, setCoupon] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponNum, setCouponNum] = useState({
    coupon_number: '',
  });
  // Coupon input state
  const CouponInput = (e) => {
    e.preventDefault();
    setCoupon(!coupon);
  };
  let server_products = [];
  props.cartList?.forEach((e) => {
        e.shop_cart_products.forEach(e => {
            server_products.push(e);
        })
      })   

  // GET DELIVERY & MIN ORDER
  let PriceContainer = {
    delivery_charge: '',
    min_order: 100,
  };    
    // GET REGULAR PRODUCTS PRICES
    const getProductPrice = (arr,campaign)=> {
      let products = [];
    arr?.forEach((x) => {
      x.shop_cart_products.forEach(e => {
        if (e.is_campaign === campaign) {
          products.push(e)
        }
      })
    })
    let allProd = []
    products?.forEach((x) => {
      allProd.push(x.price);
    });
    return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  const getCampaignProductPrice = (arr,campaign)=> {
    let products = [];
    arr?.forEach((x) => {
      x.shop_cart_products.forEach(e => {
        if (e.is_campaign === campaign) {
          products.push(e)
        }
      })
    })
    let allProd = []
    products?.forEach((x) => {
      allProd.push(get_singleProd_campaign_price_count(x));
    });
    return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
  // GET FINAL AMOUNT
  const final_total_amount = props.campaign ? (
    getCampaignProductPrice(props.cartList,1) ||
    0
  ).toFixed(2): (
    getProductPrice(props.cartList,0) ||
    0
  ).toFixed(2)

  // SET COUPON NUMBER
  const handleChange = (e) => {
    setCouponNum({
      [e.target.name]: e.target.value,
    });
  };
  // COUPON SUBMIT
  const submitCoupon = (e) => {
    setCouponLoading(true);
    const user = localStorage.getItem('user_id')
    e.preventDefault();
    API()
      .post(`${ENDPOINTS.COUPON_TOKEN}?api_key=${api_key}&user_id=${user}&coupon_code=${couponNum.coupon_number}`)
      .then((res) => {
        if (!res.data.data.id) {
          setOffer({ coupon_error: res.data.data.message })
          setCouponLoading(false);
        } else { 
          setOffer({...res.data.data, coupon_success: `Coupon added successfully`});
          setCouponLoading(false);
        };
      })
      .catch((error) => {
        setCouponLoading(false);
        console.log(error);
      });
    };
  // PLACE ORDER FUNCTION
  const PlaceOrder = (e) => {
    const order = () => { 
      const data = {
        ...props.details,
        coupon_id: offer.id || '',
        coupon_discount: offer?.price
        ? Number(offer.price).toFixed(2)
        : offer?.percentage,
        payment_type: props.type,
        adjusted_amount: props.FinalRewardCash,
        delivery_charge: PriceContainer.delivery_charge,
        is_campaign: props.campaign,
      };
      props.order(data);
    }
    e.preventDefault();
    setError('');
    if (
      props.details?.name === '' ||
      props.details?.phone === '' ||
      props.details?.email === '' ||
      props.details?.district === '' ||
      props.details?.upazilla === '' ||
      props.details?.address === ''
    ) {
      setError('Please fill all the delivery details.');
    } else if (!props.cartList?.length > 0) {
      setError('your cart is empty');
    } else if (props.type ==='ub') { 
      if (props.serverRCAdjustedPrice.uparzon_balance >= Number(final_total_amount)) {
        order()
      } else { 
        setError('insufficiant uparzon balance!')
      }
    } else {
      order()
      }
  };

  // PUSH TO ORDER SUCCESS NOTIFICATION
  // props.orderStatus && history.push('/ordersuccess');
  // Close the popup
  const closePopup = (e) => {
    e.preventDefault();
    setError('');
    props.orderClearMsg()
    props.getCartItems()
    setOffer({
      price:'',
      percentage:''
    })
    setError('')
  };

  return (
    <div className="">
      {error && (
        <PopUp response={error} setResponse={setError} close={closePopup} />
      )}
      {props.order_msg && (
        <PopUp response={props.order_msg} setResponse={setError} close={closePopup} />
      )}
      <div className="price_details chekoutCard">
        <div className="checkout_headings">
          <h4>Price Details</h4>
        </div>
        <div className="order_summary mt-5">
          <div className="">
            <div className="row justify-content-between m-0 p-0 col-12">
              <p className="mr-3 discount_amount mb-0">Subtotal: </p>{' '}
              <span className="discount_amount">
                &#2547;{' '}
                {final_total_amount}
              </span>
            </div>
            <div className="row no-gutters align-items-center">
              <div className="delivery_charge row justify-content-between m-0 col-12">
                  <div className="col delivery_amount p-0 m-0">
                    Shippin Charge
                  </div>
                <div className="">
                  &#2547; {PriceContainer?.delivery_charge || 0}
                </div>
              </div>
            </div>

            <div className="row justify-content-between m-0 col-12 p-0">
              <p className=" discount_amount mb-0">Discount: </p>{' '}
              <span className="discount_amount">
                {' '}
                {offer.id ? offer?.price
                  ? Number(offer.price).toFixed(2) + 'tk'
                  : offer?.percentage + ' %' : 0}
              </span>
            </div>
          </div>

          <div className="border_top_section"></div>
          <div className="grand_total row no-gutters">
            <span className="grand_total_label">Grand Total</span>
            <span className="grand_total_amount">
              &#2547;{' '}
              {offer?.price
                  ? Number(final_total_amount).toFixed(2) - Number(offer.price).toFixed(2)
                  : offer?.percentage
                  ? (
                      (Number(final_total_amount) * Number(offer.percentage)) /
                      100
                    ).toFixed(2)
                  : Number(final_total_amount).toFixed(2)}

            </span>
          </div>

        </div>
      </div>
      <div className="coupon_anchore">
          <Link to="#" onClick={CouponInput}>
            Do You Have a Coupon Code ?
          </Link>
        {coupon && (
          <div className="row no-gutters mt-2 coupon_input">
            <div className="form-group col-md-9 mb-2">
              <label htmlFor="coupon_number" className="sr-only">
                Coupon number
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="coupon_number"
                name="coupon_number"
                placeholder="Coupon number"
                onChange={handleChange}
                value={couponNum.coupon_number}
              />
            </div>
            <button
              type="button"
              onClick={submitCoupon}
              className="btn mb-2 col-md-3"
              disabled={couponLoading}>
              {couponLoading ? 'Loading...' : 'Apply Coupon'}
            </button>
          </div>
        )}
        {offer.coupon_error && 
          <div className="error-handler text-center">{ offer.coupon_error}</div>
        }
        {offer.coupon_success && 
          <div className="alert alert-success text-center">{ offer.coupon_success}</div>
        }
        </div>
      <div className="order_btn">
            <button
              type="button"
              className={` btn btn-primary col-9`}
              onClick={PlaceOrder}
              >
              {props.orderSuccessLoading ? 'ORDER PROCESSING...' : 'PLACE ORDER'}
        </button>
        <div className="order_btn_price col-3">&#2547;
        {offer?.price
                  ? Number(final_total_amount) - Number(offer.price).toFixed(2)
                  : offer?.percentage
                  ? (
                      (Number(final_total_amount) * Number(offer.percentage)) /
                      100
                    ).toFixed(2)
                  : (Number(final_total_amount)).toFixed(2)} 
        </div>
          </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UserInfo.loading,
  deliveryTypes: state.UserInfo.delivery_types,
  info: state.UserInfo.info,
  status: state.UserInfo.status,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  user: state.User.user,
  orderSuccessLoading: state.PlaceOrder.placingOrder,
  orderStatus: state.PlaceOrder.place_order_status,
  order_msg: state.PlaceOrder.place_order_msg,
  orderError: state.PlaceOrder.order_error,
});

const mapDispatchToProps = (dispatch) => ({
  order: (data) => dispatch(PlaceOrder(data)),
  orderClearMsg: () => dispatch(PlaceOrderClearMsg()),
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetails);
