import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { getCartProdSubTotal } from '../PrimarySections/Utility';
import { guestCartItem } from '../Redux/Action/BasketAction';
import { getCartItems } from '../Redux/Action/CartProductsAction';
import { GetUserDistrict, getUserInfo } from '../Redux/Action/GetUserInfoAction';
import { getWishlistItems, guestWishItem } from '../Redux/Action/WishListAction';
import './checkout.css';
import CheckOutBody from './Components/CheckOutBody';

const CheckOut = (props) => {
  useEffect(() => {
    props.user && props.getUserDistrict();
    props.user && props.getUserInfo();
    // local products to server
    props.localCartList?.length > 0 && props.guestCartSubmit();
    props.localWishList?.length > 0 && props.guestWishSubmit();
    props.user && props.getCartItems()
    props.user && props.getWishItems()
    toTheTop();
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
          <CheckOutBody 
          campaign={ props.campaign}
          setCampaign={props.setCampaign}
          />
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
  localCartList: state.Basket.localBasket,
  localWishList: state.Wishlist.localWishlist,
  geustListloading: state.Basket.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
  getUserDistrict: () => dispatch(GetUserDistrict()),
  guestCartSubmit: (array) => dispatch(guestCartItem(array)),
  guestWishSubmit: (array) => dispatch(guestWishItem(array)),
  getCartItems: () => dispatch(getCartItems()),
  getWishItems: () => dispatch(getWishlistItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);


