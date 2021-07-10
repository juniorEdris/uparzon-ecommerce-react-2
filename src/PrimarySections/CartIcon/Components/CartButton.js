import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProdSubTotal } from '../../Utility';

const CartButton = (props) => {
  
  let server_products = [];
  let local_products = [];
  if (!props.user) {
    props.localCartList?.forEach((e) => {
      local_products.push(e);
    })
  } else {
    props.cartList?.forEach((e) => {
      e.shop_cart_products.forEach(e => {
          server_products.push(e);
      })
    })    
  };
  return (
    <div>
      {/* cart product button starts */}
      <div className="cart_product_btn col-12 p-0">
        <div className="cart_total row no-gutters justify-content-between">
          <span>subtotal :</span>
          <span>
            &#2547;{' '}
            {
               !props.user
              ? getCartProdSubTotal(local_products, props.user) || 0
              : getCartProdSubTotal(server_products, props.user) || 0
            }
          </span>
        </div>
        <div className="cart_total row no-gutters justify-content-between">
          <span>total :</span>
          <span>
            &#2547;{' '}
            {
              !props.user
              ? getCartProdSubTotal(local_products, props.user) || 0
              : getCartProdSubTotal(server_products, props.user) || 0
            }
          </span>
        </div>
        <div className="checkout_btn">
          <Link
            to={'/check-out'}
            className={`btn w-100`}
            onClick={(e) => {
              props.loginSuccessPageRedirectTo('/check-out');
              props.setCart(false);
              props.setCampaign(props.is_campaign)
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
  user: state.User.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
