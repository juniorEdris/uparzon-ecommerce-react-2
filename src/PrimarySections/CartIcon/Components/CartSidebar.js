import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartList from './CartList';
import RegularCartList from './RegularCartList';

const CartSidebar = (props) => {
  const [Cartsection, setCartsection] = useState('campaign');
  const cartSections = (e) => {
    e.preventDeafault();
  };
  return (
    <div className="cart_sidebar">
      <div className={`cart_sidebar_route ${!props.cart && 'd-none'}`}>
        <div className="cart_header">
          <div className="cart_header_count">
            <img
              src="./uparzonassets/svg/icons/cart_icon/cart.svg"
              alt="cart-icon"
            />
            <span className="cart_header_item_count">
              {props.cartLength()} items
            </span>
          </div>
          <span
            className="lnr lnr-arrow-right"
            onClick={() => props.setCart(false)}></span>
        </div>
        <div className="cart_section row no-gutters">
          <Link
            to="#"
            className={`col-6 d-block text-center pt-3 pb-3 ${
              Cartsection === 'campaign' && 'active'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setCartsection('campaign');
            }}>
            campaign
          </Link>
          <Link
            to="#"
            className={`col-6 d-block text-center pt-3 pb-3 ${
              Cartsection === 'regular' && 'active'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setCartsection('regular');
            }}>
            regular
          </Link>
        </div>
        {Cartsection === 'campaign' ? (
          <CartList
            setCart={props.setCart}
            loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
          />
        ) : (
          <RegularCartList
            setCart={props.setCart}
            loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  user: state.User.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
