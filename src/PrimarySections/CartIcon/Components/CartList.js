import Skeleton from '@yisheng90/react-loading';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { products } from '../../../data';
import {
  AddBasketProd,
  DecreamentBasketProd,
  IncreamentBasketProd,
  RemoveBasketProd,
} from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import {
  getCartUpdateID,
  removeCartUpdateID,
} from '../../../Redux/Action/CartUpdateIDAction';
import { getCartProdSubTotal, useQuery } from '../../Utility';
import CartButton from './CartButton';

const CartList = (props) => {
  const router = useHistory();
  const query = useQuery();
  useEffect(() => {
    props.user && props.getCartItems();
  }, []);

  const removeFromCart = async (item) => {
    await props.removeProduct(item);
    const id = query.get('id');
    let redirect = '';
    if (id) {
      redirect = `/productdetails?id=${id}`;
    } else {
      redirect = `${router.location.pathname}${
        router.location.search && router.location.search
      }`;
    }
    router.replace(redirect);
    props.user && (await props.getCartItems());
  };

  const addToCart = async (item) => {
    await props.addToCart(item);
    props.user && (await props.getCartItems());
  };
  // FILTER CAMPAIGN PRODUCTS
  let campaign_products = [];
  props.localCartList?.forEach((e) => {
    if (e.is_campaign !== 0) {
      campaign_products.push(e);
    }
  });
  return (
    <div>
      <div className="cart_product_wrapper">
        {!props.user ? (
          <ul className="cart_sidebar_list">
            {campaign_products.map((item) => (
              <li key={item.id}>
                <div className="cart_single_product">
                  <div className="cart_single_image">
                    <Link to={`/updatecartproduct?id=${item.product_id}`}>
                      <img
                        src={`https:${item.photo}`}
                        // src={`uparzonassets/uparzonimages/products/${item.photo}`}
                        alt="img-1"
                        onClick={() => props.getCartID(item.product_id)}
                      />
                    </Link>
                  </div>
                  <div className="cart_single_body flex-grow-1">
                    <div className="d-flex">
                      <div className="cart_single_name">
                        <Link
                          to={`/updatecartproduct?id=${item.product_id}`}
                          onClick={() => props.getCartID(item.product_id)}>
                          {item.name}
                        </Link>
                      </div>
                      <div className="cart_total_price">
                        <span className="cart_price">
                          &#2547;{' '}
                          {(item?.unit_price * item.total_quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="cart_single_price">
                      <span className="cart_price">
                        Price:{' '}
                        <span className="theme-color">
                          &#2547; {item?.unit_price}
                        </span>
                      </span>
                      {/* <span className="count">{item.total_quantity || 2}</span> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cart_quantity">
                        <span
                          className={`${
                            item.total_quantity === 1 && 'pointer_disabled'
                          }`}
                          onClick={() => props.decreamentProduct(item)}>
                          -
                        </span>
                        <input
                          type="text"
                          value={item.total_quantity}
                          defaultValue={item.total_quantity}
                        />
                        <span
                          className=""
                          onClick={() => props.increamentProduct(item)}>
                          +
                        </span>
                      </div>
                      <div className="cart_cancel pt-2 pb-2 ">
                        <span
                          className="cart_product_cross"
                          onClick={() => {
                            removeFromCart(item);
                            props.removeCartID();
                          }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9.299"
                            height="11.445"
                            viewBox="0 0 9.299 11.445">
                            <path
                              id="Icon_metro-bin"
                              data-name="Icon metro-bin"
                              d="M5.214,5.5v7.153a.717.717,0,0,0,.715.715h6.438a.717.717,0,0,0,.715-.715V5.5ZM7.36,11.942H6.645V6.935H7.36Zm1.431,0H8.075V6.935h.715Zm1.431,0H9.506V6.935h.715Zm1.431,0h-.715V6.935h.715Zm1.609-8.584H10.937V2.465a.538.538,0,0,0-.536-.536H7.9a.538.538,0,0,0-.536.536v.894H5.035A.538.538,0,0,0,4.5,3.9v.894h9.3V3.9A.538.538,0,0,0,13.261,3.359Zm-3.04,0H8.075V2.652h2.146v.706Z"
                              transform="translate(-4.498 -1.928)"
                              fill="#006d74"
                            />
                          </svg>
                        </span>{' '}
                      </div>
                    </div>
                  </div>
                </div>{' '}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="cart_sidebar_list">
            {props.loading
              ? Array(5)
                  .fill()
                  .map((x, i) => (
                    <Skeleton
                      width={'100%'}
                      height={'100px'}
                      className="mb-4"
                    />
                  ))
              : props.cartList?.map((item) => (
                  <li key={item.product_id}>
                    <div className="cart_single_product">
                      {/* <div className="count_btn">
                        <span
                          className="cart_dec_btn"
                          onClick={() => addToCart(item)}>
                          <i className="fas fa-plus"></i>
                        </span>
                        <span
                          className="cart_inc_btn"
                          onClick={() => removeFromCart(item)}>
                          <i className="fas fa-minus"></i>
                        </span>
                      </div> */}
                      <div className="cart_single_image">
                        <Link to={`/updatecartproduct?id=${item?.product_id}`}>
                          <img
                            src={`https:${item?.photo}`}
                            alt="img-1"
                            onClick={() => props.getCartID(item?.id)}
                          />
                        </Link>
                      </div>
                      <div className="cart_single_body">
                        <div className="cart_single_name">
                          <Link
                            to={`/updatecartproduct?id=${item?.product_id}`}
                            onClick={() => props.getCartID(item?.id)}>
                            {item?.name}
                          </Link>
                        </div>
                        <div className="cart_single_price">
                          <span className="cart_price">
                            &#2547; {item?.unit_price?.price}
                          </span>
                          <span className="times">&times;</span>
                          <span className="count">{item?.total_quantity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="cart_cancel">
                      <span
                        className="cart_product_cross"
                        onClick={() => {
                          removeFromCart(item);
                          props.removeCartID();
                        }}>
                        &times;
                      </span>
                    </div>
                  </li>
                ))}
          </ul>
        )}
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts*/}
      <CartButton
        setCart={props.setCart}
        loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  CartID: state.CartID.cart_update_id,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod) => dispatch(RemoveBasketProd(prod)),
  increamentProduct: (prod) => dispatch(IncreamentBasketProd(prod)),
  decreamentProduct: (prod) => dispatch(DecreamentBasketProd(prod)),
  getCartItems: () => dispatch(getCartItems()),
  getCartID: (id) => dispatch(getCartUpdateID(id)),
  removeCartID: () => dispatch(removeCartUpdateID()),
  addToCart: (product) => dispatch(AddBasketProd(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
