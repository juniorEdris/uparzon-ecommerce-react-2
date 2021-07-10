import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './carticon.css';
import CartSidebar from './Components/CartSidebar';

const CartIcon = (props) => {
  useEffect(() => {
    props.user &&  props.getCartItems()
  }, []);
  useEffect(() => {
    document.body.style.overflow = props.cart ? 'hidden' : '';
  }, [props.cart]);
  const sidebarOpen = async (e) => {
    e.preventDefault();
    props.setCart(!props.cart);
    props.user && (await props.getCartItems())
  };
  let server_products = [];
  props.cartList?.forEach((e) => {
    e.shop_cart_products.forEach(e => {
      if (e.is_campaign !== 0) {
        server_products.push(e);
      }
    })
  })

  let cartLength = () => {
    let allProd = [];
    props.user
      ? props.cartList?.forEach((x) => {
        x.shop_cart_products.forEach(x => {
          allProd.push(x.total_quantity);
        })
        })
      : props.localCartList?.forEach((x) => {
          allProd.push(x.total_quantity);
        });
    return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  };
  return (
    <div className="">
      <Link to="#" onClick={sidebarOpen}>
        <div className="cart_icon">
          <div className="icon_wrapper">
            <img
              src="./uparzonassets/svg/icons/cart_icon/cart.svg"
              alt="cart_icon"
            />
            <span className="items_count">{cartLength()}</span>
          </div>
        </div>
      </Link>
      <CartSidebar
        cart={props.cart}
        setCart={props.setCart}
        cartLength={cartLength}
        loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
        campaign={props.campaign}
        setCampaign={props.setCampaign}
      />
      {props.cart && (
        <div
          className="cart-back-drop"
          onClick={() => props.setCart(false)}></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
