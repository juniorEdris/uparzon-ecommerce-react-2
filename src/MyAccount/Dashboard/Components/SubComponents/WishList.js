import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartAddanime from '../../../../PrimarySections/CartAddAnime/CartAddanime';
import { AddBasketProd } from '../../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../../Redux/Action/CartProductsAction';
import { getWishlistItems, RemoveWishProd } from '../../../../Redux/Action/WishListAction';
import WishlistBody from '../../../../Wishlist/Components/WishlistBody';

const WishList = (props) => {
  const removeFromCart = async (items) => {
    await props.removeWishProd(items);
    props.user && (await props.getWishlist());
  };
  return (
    <div className="dash_wishlist_wrapper">
      <div className="order_header pl-4 pb-3 pt-3 pr-4 mb-3">
        <h3>Wishlist</h3>
      </div>
      <div className="">
      {
          !props.localWishlist?.length > 0 ? (
            <div className="col-12 p-5 text-center">
              <div className="col-12 mb-2" style={{fontSize: '1.5rem',
    color:'rgb(0, 109, 116)'}}>
                No Products Yet
              </div>
              <Link
                className="btn "
                to="/"
                style={{ fontSize: '1.2rem', borderRadius: '0',background:'#006D74',color:'#fff' }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <WishlistBody
              loading={false}
              products={props.localWishlist}
              // products={products}
              getCartItems={props.getCartItems}
              addToCart={props.addToCart}
              user={props.user}
              removeProd={removeFromCart}
            />
          )
          }
          <CartAddanime
            Msg={props.basketMessage}
            tabState={props.basketStatus}
          />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Wishlist.loading,
  wishlist: state.Wishlist.wishlist,
  localWishlist: state.Wishlist.localWishlist,
  wishMessage: state.Wishlist.wishlistMsg,
  wishStatus: state.Wishlist.wishlistStatus,
  basketMessage: state.Basket.basketmsg,
  basketStatus: state.Basket.tabStatus,
  user: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({
  getWishlist: () => dispatch(getWishlistItems()),
  removeWishProd: (product) => dispatch(RemoveWishProd(product)),
  getCartItems: () => dispatch(getCartItems()),
  addToCart: (product, count) => dispatch(AddBasketProd(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
