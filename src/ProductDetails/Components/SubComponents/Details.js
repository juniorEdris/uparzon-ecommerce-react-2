import Skeleton from '@yisheng90/react-loading';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  AddBasketProd,
  updateCartItem,
} from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import { getCartUpdateID } from '../../../Redux/Action/CartUpdateIDAction';
import { addToWishlistAction } from '../../../Redux/Action/WishListAction';

const Details = (props) => {
  const router = useHistory();
  const path = router.location.pathname;
  const [quantity, setQuantity] = useState(1);
  const [priceId, setPriceId] = useState('');
  const [price, setPrice] = useState('');
  const [previousPrice, setPreviousPrice] = useState(0);

  useEffect(() => {
    // props.getCartID('');
    setPrice('');
    setPriceId('');
    setPreviousPrice(0);
    setQuantity(1);
  }, [props.prodID]);
  useEffect(() => {}, [path]);
  const selectPackage = (x) => {
    setPriceId(x.id);
    setPrice(x.price);
    setPreviousPrice(x.previous_price);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const addProduct = async (item) => {
    const product = {
      product_id: item.id,
      photo: item.photo,
      name: item.name,
      price: price === '' ? item.unit_prices[0]?.price : price,
      unit_prices_id: priceId === '' ? item.unit_prices[0]?.id : priceId,
      total_quantity: quantity,
    };
    await props.addToCart(product, quantity);
    props.user && (await props.getCartItems());
  };
  const updateCartItem = async (item) => {
    await props.updateCart({
      product_id: item.id,
      cart_id: props.cart_id,
      photo: item.photo,
      name: item.name,
      price: price === '' ? item.unit_prices[0]?.price : price,
      unit_prices_id: priceId === '' ? item.unit_prices[0]?.id : priceId,
      total_quantity: quantity,
    });
    props.user && (await props.getCartItems());
  };
  const addToWish = async (item) => {
    const product = {
      product_id: item.id,
      photo: item.photo,
      name: item.name,
      unit_price: {
        price:
          price === '' ? parseInt(item.unit_prices[0]?.price) : parseInt(price),
        previous_price:
          previousPrice === ''
            ? parseInt(item.unit_prices[0]?.previous_price)
            : parseInt(previousPrice),
        unit_prices_id: priceId === '' ? item.unit_prices[0]?.id : priceId,
      },
      total_quantity: quantity,
    };
    await props.addToWish(product);
  };
  return (
    <div className="product_details_wrapper">
      {props.loading ? (
        <div className="product_details_caption">
          <div className="details_product-name">
            <Skeleton className="mb-3" width={'100%'} height={50} />
          </div>
          <div className="details_ratings mb-2">
            <Skeleton className="" width={'40%'} height={30} />
          </div>
          <div className="details_manufacture-product">
            <Skeleton className="" width={'100%'} height={20} />
          </div>
          <div className="details_price-box">
            <Skeleton className="" width={'30%'} height={30} />
          </div>
          <div className="details_qty mb-5">
            <Skeleton className="" width={'100%'} height={30} />
            <Skeleton className="" width={'100%'} height={30} />
            <Skeleton className="" width={'100%'} height={30} />
          </div>
          <div className="details_buttons_wrapper">
            <Skeleton className="mb-5" width={'100%'} height={50} />
          </div>
        </div>
      ) : (
        <div className="product_details_caption">
          <div className="details_product-name">
            <p title={props.details?.name}>{props.details?.name}</p>
          </div>
          <div className="details_generic mb-2">
            <small>
              generic:{' '}
              <Link
                to={`/generic-products?generic-id=${props.details?.generic_id}`}>
                {props.details?.generic_name}
              </Link>
            </small>
          </div>

          <div className="details_manufacture-product">
            <small>
              company:{' '}
              <Link
                to={`/company-medicines?company-id=${props.details?.company_id}`}>
                {props.details?.company !== null ? props.details?.company : ''}
              </Link>
            </small>
          </div>
          <div className="share_btns">
            <Link to="#">
              {' '}
              <img
                className="share_btns_child share"
                src={'assets/svg/product_details/Icon ionic-md-share.svg'}
                alt="share button"
              />{' '}
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                addToWish(props.details);
              }}>
              <img
                className="share_btns_child wishlist"
                src={
                  'assets/svg/product_details/Icon material-favorite-border.svg'
                }
                alt="add to wish list button"
              />{' '}
            </Link>
          </div>
          <div className="details_price-box">
            {props.details?.unit_prices && (
              <div className="details_regular-price">
                <span className="">
                  &#2547;{' '}
                  {price === ''
                    ? (props.details?.unit_prices[0]?.price * quantity).toFixed(
                        2
                      ) || 0
                    : (price * quantity).toFixed(2) || 0}
                </span>
              </div>
            )}
            {props.details?.unit_prices && (
              <div className="details_old-price">
                <span>MRP: </span>
                <del>
                  &#2547;
                  {previousPrice === 0
                    ? props.details?.unit_prices[0]?.previous_price || 0
                    : previousPrice}
                </del>
              </div>
            )}
          </div>
          {props.details?.unit_prices && (
            <div className="details_qty">
              {props.details?.unit_prices?.map((x) => (
                <div className="single_radio">
                  <div className="" onClick={() => setQuantity(1)}>
                    <input
                      type="radio"
                      name="price_id"
                      id={x.unitType}
                      onChange={() => selectPackage(x)}
                      checked={
                        priceId === ''
                          ? props.details?.unit_prices[0]?.id === x.id
                          : priceId === x.id
                      }
                      required
                    />

                    <label htmlFor={x.unitType}>
                      {x.unit_quantity} {x.unitType}{' '}
                      <small className="radio_price">(&#2547; {x.price})</small>
                    </label>
                  </div>
                  <div
                    className={`
                      ${
                        priceId === ''
                          ? props.details?.unit_prices[0]?.id === x.id
                            ? ''
                            : 'pointer_disabled'
                          : priceId === x.id
                          ? ''
                          : 'pointer_disabled'
                      } radio_qty row align-items-center no-gutters `}>
                    <span
                      className={`${
                        quantity === 1 && 'counter_disabled'
                      } radio_qty_dec`}
                      onClick={decrement}>
                      <i className="fa fa-minus"></i>
                    </span>
                    <input
                      type="text"
                      readOnly
                      value={
                        priceId === ''
                          ? props.details?.unit_prices[0].id === x.id
                            ? quantity
                            : 1
                          : priceId === x.id
                          ? quantity
                          : 1
                      }
                    />
                    <span className={`radio_qty_inc`} onClick={increment}>
                      <i class="fa fa-plus"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="details_buttons_wrapper mt-5">
            {path !== '/updatecartproduct' ? (
              <button
                className={`details_btn-cart btn btn-danger col-12 col-md-8 offset-md-2`}
                type="button"
                onClick={() => addProduct(props.details)}>
                add to cart
              </button>
            ) : (
              <button
                className={`details_btn-cart btn btn-danger col-12 col-md-8 offset-md-2`}
                type="button"
                onClick={() => updateCartItem(props.details)}>
                {' '}
                update cart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
  cart_id: state.CartID.cart_update_id,
  user: state.User.user,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, count) => dispatch(AddBasketProd(product, count)),
  getCartItems: () => dispatch(getCartItems()),
  addToWish: (product) => dispatch(addToWishlistAction(product)),
  updateCart: (data) => dispatch(updateCartItem(data)),
  getCartID: (id) => dispatch(getCartUpdateID(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(Details));
