import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
  const openDropdown = (e) => {
    e.preventDefault();
    props.setCart(!props.cart);
  };
  let cartLength = () => {
    let allProd = [];
    props.user
      ? props.cartList?.forEach((x) => {
        x.shop_cart_products?.forEach(x => {
          allProd.push(x.total_quantity);
        })
        })
      : props.localCartList?.forEach((x) => {
          allProd.push(x.total_quantity);
        });
    return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  };
  return (
    <div>
      <Link to="#" className="header__link2 " onClick={openDropdown}>
        <div className="header__option__basket dropdown_parent">
          <div className="icon">
            <img
              src="./uparzonassets/svg/icons/headerButtons/shopping-cart.svg"
              alt="shopping cart"
            />
          </div>
          <div className="count">{cartLength()}</div>
        </div>
      </Link>
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

// getCartItems: () => dispatch(getCartItems()),
