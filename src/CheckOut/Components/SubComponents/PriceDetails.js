/* eslint-disable no-self-compare */
/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { PopUp } from '../../../PrimarySections/SectionUtils/PopUp';
import { getCartProdSubTotal} from '../../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../../PrimarySections/Utility/API_Links';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import { PlaceOrder, PlaceOrderClearMsg } from '../../../Redux/Action/PlaceOrderAction';

const PriceDetails = (props) => {
  const [offer, setOffer] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    setOffer({});
  }, []);
  const history = useHistory();
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
  // GET TOTAL PRICE
  const total_amount = getCartProdSubTotal(server_products, props.user) || 0;

  // GET DELIVERY & MIN ORDER
  let PriceContainer = {
    delivery_charge: '',
    min_order: 100,
  };
  // props.deliveryTypes?.forEach((type) => {
  //   if (type.conditional !== '1') {
  //     type.delivery_charges.forEach((charge) => {
  //       PriceContainer = {
  //         delivery_charge: charge.delivery_charge,
  //         min_order: charge.min_order,
  //       };
  //       // delivery_charge = charge.delivery_charge;
  //     });
  //   } else {
  //     for (let i = 0; i <= type?.delivery_charges?.length; i++) {
  //       if (total_amount >= type?.delivery_charges[i]?.min_order) {
  //         PriceContainer = {
  //           delivery_charge: type?.delivery_charges[i]?.delivery_charge,
  //           min_order: type?.delivery_charges[i]?.min_order,
  //         };
  //         return PriceContainer;
  //       }
  //     }
  //   }
  // });
  // GET TOTAL AMOUNT
  // const final_total_amount = (
  //   parseInt(getCartProdSubTotal(props.cartList, props.user)) +
  //     Number(PriceContainer?.delivery_charge) ||
  //   getCartProdSubTotal(props.cartList, props.user) ||
  //   0
  // ).toFixed(2);
  const final_total_amount = (
    getCartProdSubTotal(server_products, props.user) ||
    0
  ).toFixed(2);

  // SET COUPON NUMBER
  const handleChange = (e) => {
    setCouponNum({
      [e.target.name]: e.target.value,
    });
  };
  // COUPON SUBMIT
  const submitCoupon = (e) => {
    setCouponLoading(true);
    e.preventDefault();
    API()
      .post(`${ENDPOINTS.COUPON_TOKEN}?coupon_code=${couponNum.coupon_number}`)
      .then((res) => {
        setOffer(res.data.data);
        setCouponLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // PLACE ORDER FUNCTION
  const PlaceOrder = (e) => {
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
    } else {
      const data = {
        ...props.details,
        coupon_id: offer.id || '',
        coupon_discount: offer.price || '',
        payment_type: props.type,
        adjusted_amount:props.cashBack || '',
        delivery_charge: PriceContainer.delivery_charge,
      };
      props.order(data);
    }
    /*
       else if (
      Number(PriceContainer?.min_order) >
      (getCartProdSubTotal(server_products, props.user) || 0)
    ) {
      setError(`minimum order price ${PriceContainer?.min_order}tk`);
    }
    */ 
  };

  // PUSH TO ORDER SUCCESS NOTIFICATION
  // props.orderStatus && history.push('/ordersuccess');
  // Close the popup
  const closePopup = (e) => {
    e.preventDefault();
    setError('');
    props.orderClearMsg()
    props.getCartItems()
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
                {(getCartProdSubTotal(server_products, props.user) || 0).toFixed(
                  2
                )}
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
                &#2547;{' '}
                {offer?.price ? Number(offer.price).toFixed(2) : (0).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="border_top_section"></div>
          <div className="grand_total row no-gutters">
            <span className="grand_total_label">Grand Total</span>
            <span className="grand_total_amount">
              &#2547;{' '}
              {offer?.price
                ? (final_total_amount - Number(offer.price).toFixed(2)).toFixed(
                    2
                  ) || 0
                : final_total_amount}
            </span>
          </div>

        </div>
      </div>
      <div className="coupon_anchore">
          <Link to="#" onClick={CouponInput}>
            Do You Have a Coupon Code ?
          </Link>
        {coupon && (
          <div className="row mt-2 coupon_input">
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
        </div>
      <div className="order_btn">
            <button
              type="button"
              className={` btn btn-primary col-9`}
              onClick={PlaceOrder}
              >
              {props.orderSuccessLoading ? 'ORDER PROCESSING...' : 'PLACE ORDER'}
        </button>
        <div className="order_btn_price col-3">&#2547; {final_total_amount}</div>
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
