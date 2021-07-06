import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProdSubTotal } from '../PrimarySections/Utility';
import { GetUserDistrict, getUserInfo } from '../Redux/Action/GetUserInfoAction';
import './checkout.css';
import CheckOutBody from './Components/CheckOutBody';

const CheckOut = (props) => {
  useEffect(() => {
    props.user && props.getUserDistrict();
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
              <h2 className='text-center font-weight-bold'>Checkout</h2>
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
  getUserDistrict: () => dispatch(GetUserDistrict()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);


