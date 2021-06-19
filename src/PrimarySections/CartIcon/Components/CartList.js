import Skeleton from '@yisheng90/react-loading';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  AddBasketProd,
  RemoveBasketProd,
} from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import {
  getCartUpdateID,
  removeCartUpdateID,
} from '../../../Redux/Action/CartUpdateIDAction';
import { getCartProdSubTotal, useQuery } from '../../Utility';

const CartList = (props) => {
  const router = useHistory();
  const query = useQuery();

  useEffect(() => {
    props.user && props.getCartItems();
  }, []);

  const removeFromCart = async (item) => {
    await props.removeProduct(item);
    const id = query.get('id');
    let redirect = '';
    if (id) {
      redirect = `/productdetails?id=${id}`;
    } else {
      redirect = `${router.location.pathname}${
        router.location.search && router.location.search
      }`;
    }
    router.replace(redirect);
    props.user && (await props.getCartItems());
  };

  const addToCart = async (item) => {
    await props.addToCart(item);
    props.user && (await props.getCartItems());
  };
  return (
    <div>
      <div className="cart_product_wrapper">
        {!props.user ? (
          <ul className="cart_sidebar_list">
            {props.localCartList?.map((item) => (
              <li key={item.id}>
                <div className="cart_single_product">
                  <div className="cart_single_image">
                    <Link to={`/updatecartproduct?id=${item.id}`}>
                      <img
                        src={`https:${item.photo}`}
                        alt="img-1"
                        onClick={() => props.getCartID(item.id)}
                      />
                    </Link>
                  </div>
                  <div className="cart_single_body">
                    <div className="cart_single_name">
                      <Link
                        to={`/updatecartproduct?id=${item.id}`}
                        onClick={() => props.getCartID(item.id)}>
                        {item.name}
                      </Link>
                    </div>
                    <div className="cart_single_price">
                      <span className="cart_price">&#2547; {item?.price}</span>
                      <span className="times">&times;</span>
                      <span className="count">{item.total_quantity}</span>
                    </div>
                  </div>
                </div>
                <span
                  className="cart_product_cross"
                  onClick={() => {
                    removeFromCart(item);
                    props.removeCartID();
                  }}>
                  &times;
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="cart_sidebar_list">
            {props.loading
              ? Array(5)
                  .fill()
                  .map((x, i) => (
                    <Skeleton
                      width={'100%'}
                      height={'100px'}
                      className="mb-4"
                    />
                  ))
              : props.cartList?.map((item) => (
                  <li key={item.product_id}>
                    <div className="cart_single_product">
                      {/* <div className="count_btn">
                        <span
                          className="cart_dec_btn"
                          onClick={() => addToCart(item)}>
                          <i className="fas fa-plus"></i>
                        </span>
                        <span
                          className="cart_inc_btn"
                          onClick={() => removeFromCart(item)}>
                          <i className="fas fa-minus"></i>
                        </span>
                      </div> */}
                      <div className="cart_single_image">
                        <Link to={`/updatecartproduct?id=${item?.product_id}`}>
                          <img
                            src={`https:${item?.photo}`}
                            alt="img-1"
                            onClick={() => props.getCartID(item?.id)}
                          />
                        </Link>
                      </div>
                      <div className="cart_single_body">
                        <div className="cart_single_name">
                          <Link
                            to={`/updatecartproduct?id=${item?.product_id}`}
                            onClick={() => props.getCartID(item?.id)}>
                            {item?.name}
                          </Link>
                        </div>
                        <div className="cart_single_price">
                          <span className="cart_price">
                            &#2547; {item?.unit_price?.price}
                          </span>
                          <span className="times">&times;</span>
                          <span className="count">{item?.total_quantity}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className="cart_product_cross"
                      onClick={() => {
                        removeFromCart(item);
                        props.removeCartID();
                      }}>
                      &times;
                    </span>
                  </li>
                ))}
          </ul>
        )}
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts */}
      <div className="cart_product_btn col-12 p-0">
        <div className="cart_total row no-gutters justify-content-between">
          <span>subtotal :</span>
          <span>
            &#2547;{' '}
            {!props.user
              ? getCartProdSubTotal(props.localCartList, props.user) || 0
              : getCartProdSubTotal(props.cartList, props.user) || 0}
          </span>
        </div>
        <div className="cart_total row no-gutters justify-content-between">
          <span>total :</span>
          <span>
            &#2547;{' '}
            {!props.user
              ? getCartProdSubTotal(props.localCartList, props.user) || 0
              : getCartProdSubTotal(props.cartList, props.user) || 0}
          </span>
        </div>
        <div className="checkout_btn">
          <Link
            to={'/check-out'}
            className={`btn w-100`}
            onClick={(e) => {
              props.loginSuccessPageRedirectTo('/check-out');
              props.setCart(false);
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                id="md-cart"
                d="M10.391,22.725a2.438,2.438,0,1,0,2.4,2.438A2.426,2.426,0,0,0,10.391,22.725ZM3.375,3.6V6.037h2.4l4.32,8.887L8.289,17.911a2.368,2.368,0,0,0-.3,1.158,2.321,2.321,0,0,0,2.586,2.438H24.607V19.162H10.869a.286.286,0,0,1-.3-.3,1.534,1.534,0,0,1,.127-.305l1.2-1.922h8.94a2.349,2.349,0,0,0,2.1-1.279L27.255,7.8a1.443,1.443,0,0,0,.12-.609,1.162,1.162,0,0,0-1.2-1.158H8.416L7.275,3.6ZM22.207,22.725a2.438,2.438,0,1,0,2.4,2.438A2.426,2.426,0,0,0,22.207,22.725Z"
                transform="translate(-3.375 -3.6)"
                fill="#fff"
              />
            </svg>
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  CartID: state.CartID.cart_update_id,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod) => dispatch(RemoveBasketProd(prod)),
  getCartItems: () => dispatch(getCartItems()),
  getCartID: (id) => dispatch(getCartUpdateID(id)),
  removeCartID: () => dispatch(removeCartUpdateID()),
  addToCart: (product) => dispatch(AddBasketProd(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
