import Skeleton from '@yisheng90/react-loading';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartAddanime from '../PrimarySections/CartAddAnime/CartAddanime';
import { UserID, UserToken } from '../PrimarySections/Utility';
import { AddBasketProd } from '../Redux/Action/BasketAction';
import { getCartItems } from '../Redux/Action/CartProductsAction';
import {
  getWishlistItems,
  RemoveWishProd,
} from '../Redux/Action/WishListAction';
import WishlistBody from './Components/WishlistBody';
import WishlistHeader from './Components/WishlistHeader';
import './wishlist.css';
const WishList = (props) => {
  useEffect(() => {
    UserToken() && props.getWishlist();
  }, []);
  const removeFromCart = async (items) => {
    await props.removeWishProd(items);
    props.user && (await props.getWishlist());
  };
  return (
    <div className="wishlist_wrapper">
          <WishlistHeader />
      <div className="container-md-fluid ">
        <div className="wrapper_body w-100">
          {/* {!UserID() ? (
            props.localWishlist?.length > 0 ? (
              <div className="col-12 p-5 text-center">
                <Link
                  className="btn btn-danger"
                  to="/"
                  style={{ fontSize: '1.2rem', borderRadius: '0' }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <WishlistBody
                loading={false}
                // products={props.localWishlist}
                products={products}
                getCartItems={props.getCartItems}
                addToCart={props.addToCart}
                user={props.user}
                removeProd={removeFromCart}
              />
            )
          ) : props.loading ? (
            <div className="pl-2 pr-2 pb-2">
              <Skeleton width={'100%'} height="100px" className="mb-2" />
              <Skeleton width={'100%'} height="100px" className="mb-2" />
              <Skeleton width={'100%'} height="100px" className="mb-2" />
            </div>
          ) : !props.wishlist?.length > 0 ? (
            <div className="col-12 p-5 text-center">
              <Link
                className="btn btn-danger"
                to="/"
                style={{ fontSize: '1.2rem', borderRadius: '0' }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <WishlistBody
              loading={props.loading}
              products={props.wishlist}
              getCartItems={props.getCartItems}
              addToCart={props.addToCart}
              user={props.user}
              removeProd={removeFromCart}
            />
          )} */}
          {
          !props.localWishlist?.length > 0 ? (
            <div className="col-12 p-5 text-center">
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
