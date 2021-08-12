import Skeleton from '@yisheng90/react-loading';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartAddanime from '../PrimarySections/CartAddAnime/CartAddanime';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { UserID, UserToken } from '../PrimarySections/Utility';
import { AddBasketProd } from '../Redux/Action/BasketAction';
import { getCartItems } from '../Redux/Action/CartProductsAction';
import {
  getWishlistItems,
  RemoveWishProd,
} from '../Redux/Action/WishListAction';
import { OnlineWishlist } from './Components/OnlineWishlist';
import WishlistBody from './Components/WishlistBody';
import WishlistHeader from './Components/WishlistHeader';
import './wishlist.css';
const WishList = (props) => {
  useEffect(() => {
    UserID() && props.getWishlist();
    toTheTop()
  }, []);
  const addProduct = async (details) => {
    const data = {
      wish_id:details.id || '',
      product_id: details.product_id || '',
      slug: props.product?.slug || '',
      photo: details?.photo,
      shop_name: details?.shop_name || '',
      name: details?.name,
      price: details?.price,
      shop_id: details?.shop_id,
      vendor_delivery: details?.vendor_delivery,
      is_campaign: details.is_campaign,
      total_quantity: details.total_quantity,
      campaign_category: details.campaign_category || ''
    };
     // true is passed to send wishlist products to cart using same redux function. 
    await props.addToCart(data, true);
    props.user && (await props.getCartItems());
  };
  const removeFromCart = async (items) => {
    await props.removeWishProd(items);
    props.user && (await props.getWishlist());
  };
  return (
    <div className="wishlist_wrapper">
          <WishlistHeader />
      <div className="container-md-fluid ">
        <div className="wrapper_body w-100">
          {!props.user ? (
            !props.localWishlist?.length > 0 ? (
                <div className="col-12 p-5 text-center">
                <div className="col-12 mb-2" >
                  <img style={{ height: '150px',width: '150px',objectFit: 'contain'}} src='./uparzonassets/svg/icons/placeholders/no-wishitems.svg' alt='wishitems'/>
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
                loading={props.loading}
                products={props.localWishlist}
                // products={products}
                getCartItems={props.getCartItems}
                addToCart={props.addToCart}
                user={props.user}
                removeProd={removeFromCart}
                addProduct={addProduct}
              />
            )  
          ) : (
            props.loading
                ?
                <div className="pl-2 pr-2 pb-2">
                  <Skeleton width={'100%'} height="100px" className="mb-2" />
                  <Skeleton width={'100%'} height="100px" className="mb-2" />
                  <Skeleton width={'100%'} height="100px" className="mb-2" />
                </div>
           :                
            !props.wishlist?.length > 0 ? (
              <div className="col-12 p-5 text-center">
              <div className="col-12 mb-2" >
                <img style={{ height: '150px',width: '150px',objectFit: 'contain'}} src='./uparzonassets/svg/icons/placeholders/no-wishitems.svg' alt='wishitems'/>
              </div>
              <Link
                className="btn "
                to="/"
                style={{ fontSize: '1.2rem', borderRadius: '0',background:'#006D74',color:'#fff' }}>
                Back to Home
              </Link>
            </div>
              ) : (
                  <OnlineWishlist
                  loading={props.loading}
                  products={props.wishlist}
                  // products={products}
                  getCartItems={props.getCartItems}
                  addToCart={props.addToCart}
                  user={props.user}
                  removeProd={removeFromCart}
                  addProduct={addProduct}
                />                  
                  ) 
                
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
  addToCart: (product, type) => dispatch(AddBasketProd(product,type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
