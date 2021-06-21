import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
  const openDropdown = (e) => {
    e.preventDefault();
    props.setCart(!props.cart);
  };
  return (
    <div>
      <Link to="#" className="header__link2 " onClick={openDropdown}>
        <div className="header__option__basket dropdown_parent">
          <div className="icon">
            {/* <i className=" fas fa-search" title="search"></i> */}
            <img
              src="./uparzonassets/svg/icons/headerButtons/shopping-cart.svg"
              alt="shopping cart"
            />
          </div>
          <div className="count">
            {!props.user ? props.localCartList.length : props.cartList.length}
          </div>
        </div>
      </Link>
      {/* <div className={`${dropdown ? 'd-block' : 'd-none'} dropdown`}>
        <ul>
          <li>user 1</li>
          <li>user 2</li>
          <li>user 3</li>
        </ul>
      </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
