import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProdSubTotal } from '../PrimarySections/Utility';
import { getUserInfo } from '../Redux/Action/GetUserInfoAction';
import './checkout.css';
import CheckOutBody from './Components/CheckOutBody';

const CheckOut = (props) => {
  useEffect(() => {
    props.user && props.getUserInfo();
  }, []);
  return (
    <div className="">
      {props.orderSuccessLoading && (
        <div className="order_loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}

      <div className="checkout_wrapper">
        <div className={`container`}>
          {/* CHECKOUT HEADING STARTS HERE */}
          <div className="checkout_heading">
            <div className="checkout_heading_left col">
              <h3>Checkout</h3>
              <span>Returning Customer?</span>{' '}
              {/* <Link to="/login">Click here to login</Link> */}
            </div>
            <div className="checkout_heading_right">
              <div className="col p-0 m-0 d-flex align-items-center">
                <img src="./assets/svg/icons/shopping-cart.svg" alt="" />
                &#2547;{' '}
                {(getCartProdSubTotal(props.cartList, props.user) || 0).toFixed(
                  2
                )}
              </div>
            </div>
          </div>
          {/* CHECKOUT BODY STARTS HERE */}
          <CheckOutBody />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
  loading: state.UserInfo.loading,
  deliveryTypes: state.UserInfo.delivery_types,
  info: state.UserInfo.info,
  status: state.UserInfo.status,
  cartList: state.CartItems.basket,
  orderSuccessLoading: state.PlaceOrder.placingOrder,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
