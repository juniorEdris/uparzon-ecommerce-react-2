import Skeleton from '@yisheng90/react-loading';
import React, { memo, useEffect, useState } from 'react';
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
import { getCartProdSubTotal, groupBy, useQuery } from '../../Utility';
import CartButton from './CartButton';

const RegularCartList = (props) => {
  const router = useHistory();
  const query = useQuery();

  const removeFromCart = async (item) => {
    await props.removeProduct(item);
    props.user && (await props.getCartItems());
  };
  // FILTER REGULAR PRODUCTS
  let non_campaign_products = [];
  let server_non_campaign_products = [];
  if (!props.user) {
    props.localCartList?.forEach((e) => {
      if (e.is_campaign !== 1) {
        non_campaign_products.push(e);
      }
    })
  } else {
    props.cartList?.forEach((x) => {
      x.shop_cart_products.forEach(e => {
        if (e.is_campaign !== 1) {
          server_non_campaign_products.push(e)
        }
      })
    })
    
  };
    // GROUP ITEMS LOGICS STARTS HERE
    const localCart = groupBy(
      non_campaign_products.length > 0 ? non_campaign_products : null,
      'shop_name')
    const OnlineCart = groupBy(
      server_non_campaign_products.length > 0 ? server_non_campaign_products : null,
      'shop_name')
 // console.log(server_non_campaign_products); <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      const addToCart = async (item) => {
        await props.addToCart(item);
    props.user && (await props.getCartItems());
  };
  const decreamentProduct = async (item) => {
    await props.decreamentProduct(item)
    props.user && (await props.getCartItems());
  };
  const increamentProduct = async (item) => {
    await props.increamentProduct(item)
    props.user && (await props.getCartItems());
  };

    // get non-campaign separate amounts
    const non_campaign_prices = () => {
      let allProd = [];
      props.user
      ?
      server_non_campaign_products?.forEach((x) => {
        allProd.push(x.price);
      })
      : non_campaign_products?.forEach((x) => {
        allProd.push(x.price);
      });
      return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    };
  const cartprod = props.user ? (
    server_non_campaign_products.length > 0
      ? 
      Object.keys(OnlineCart).map(function (grooupKey) {
        const singleProduct = OnlineCart[grooupKey][0];
        return (
          <div className="col mt-4">
            <div className="regular_cart_header row no-gutters">
              <div className="col-6 text-center">
                {singleProduct.vendor_delivery
                  ? singleProduct.shop_name
                  : 'none'}
              </div>
              <div className="col-6 text-center">
                {singleProduct.vendor_delivery
                  ? singleProduct.vendor_delivery.vendor_district
                  : 'none'}
              </div>
            </div>
            <div className="regular_cart_middle row no-gutters mt-3">
              <div className="col-6 regular_cart_delivery_details">
                <div className=" regular_cart_title text-capitalize text-center">
                  delivery charges
                </div>
                <div className="row no-gutters regular_vendor_delivery_content_wrapper">
                  <div className="col-6 text-center regular_vendor_delivery_content">
                    <div className="theme-color mt-4">
                      {singleProduct.vendor_delivery
                        ? singleProduct.vendor_delivery.vendor_district
                        : 'none'}
                    </div>
                    {singleProduct.vendor_delivery
                      ? singleProduct.vendor_delivery.inside_deli_charge +
                        'tk'
                      : 'none'}
                  </div>
                  <div className="col-6 text-center regular_vendor_delivery_content">
                    <div className="theme-color mt-4">{'Anywhere'}</div>
                    {singleProduct.vendor_delivery
                      ? singleProduct.vendor_delivery.outside_deli_charge +
                        'tk'
                      : 'none'}
                  </div>
                </div>
              </div>
              <div className="col-6 regular_cart_delivery_details">
                <div className=" text-capitalize text-center regular_cart_title">
                  delivery time
                </div>
                <div className="row no-gutters regular_vendor_delivery_content_wrapper">
                  <div className="col-6 text-center regular_vendor_delivery_content">
                    <div className="theme-color mt-4">
                      {singleProduct.vendor_delivery
                        ? singleProduct.vendor_delivery.vendor_district
                        : 'none'}
                    </div>
                    {singleProduct.vendor_delivery
                      ? singleProduct.vendor_delivery.inside_deli_time
                      : 'none'}
                  </div>
                  <div className="col-6 text-center regular_vendor_delivery_content">
                    <div className="theme-color mt-4">Anywhere</div>
                    {singleProduct.vendor_delivery
                      ? singleProduct.vendor_delivery.outside_deli_time
                      : 'none'}
                  </div>
                </div>
              </div>
            </div>
            {OnlineCart[grooupKey].map(function (item) {
              return (
                <ul className="regular_cart_sidebar_list">
                  <li key={item.product_id}>
                    <div className="regular_cart_single_product row no-gutters align-items-center">
                      <div className="regular_cart_single_image col-3 p-2">
                        <Link to={`/productdetails?product=${item?.slug}&id=${item?.product_id}`}>
                          <img
                            src={`https:${item.photo}`}
                            // src={`uparzonassets/uparzonimages/products/${item.photo}`}
                            alt="img-1"
                            onClick={() => props.getCartID(item.product_id)}
                          />
                        </Link>
                      </div>
                      <div className="regular_cart_single_name col">
                        <Link
                          to={`/productdetails?product=${item?.slug}&id=${item?.product_id}`}
                          onClick={() => props.getCartID(item.product_id)}>
                          {item.name}
                        </Link>
                      </div>
                      <div className="regular_cart_total_price text-right col-3">
                        <div className="regular_cart_price">
                          &#2547;{' '}
                          {(item?.price * item.total_quantity).toFixed(
                            2
                          )}
                        </div>
                        <div className="regular_cart_quantity">
                          <span
                            className={`quantity_btn ${
                              item.total_quantity === 1 && 'pointer_disabled'
                            }`}
                            onClick={() =>decreamentProduct(item)}>
                            -
                          </span>
                          <input
                            type="text"
                            value={item.total_quantity}
                            defaultValue={item.total_quantity}
                          />
                          <span
                            className="quantity_btn "
                            onClick={() => increamentProduct(item)}>
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
                    </div>{' '}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })
      : '') : (
        non_campaign_products.length > 0
        ? Object.keys(localCart).map(function (grooupKey) {
            const singleProduct = localCart[grooupKey][0];
            return (
              <div className="col mt-4">
                <div className="regular_cart_header row no-gutters">
                  <div className="col-6 text-center">
                    {singleProduct.vendor_delivery
                      ? singleProduct.shop_name
                      : 'none'}
                  </div>
                  <div className="col-6 text-center">
                    {singleProduct.vendor_delivery
                      ? singleProduct.vendor_delivery.vendor_district
                      : 'none'}
                  </div>
                </div>
                <div className="regular_cart_middle row no-gutters mt-3">
                  <div className="col-6 regular_cart_delivery_details">
                    <div className=" regular_cart_title text-capitalize text-center">
                      delivery charges
                    </div>
                    <div className="row no-gutters regular_vendor_delivery_content_wrapper">
                      <div className="col-6 text-center regular_vendor_delivery_content">
                        <div className="theme-color mt-4">
                          {singleProduct.vendor_delivery
                            ? singleProduct.vendor_delivery.vendor_district
                            : 'none'}
                        </div>
                        {singleProduct.vendor_delivery
                          ? singleProduct.vendor_delivery.inside_deli_charge +
                            'tk'
                          : 'none'}
                      </div>
                      <div className="col-6 text-center regular_vendor_delivery_content">
                        <div className="theme-color mt-4">{'Anywhere'}</div>
                        {singleProduct.vendor_delivery
                          ? singleProduct.vendor_delivery.outside_deli_charge +
                            'tk'
                          : 'none'}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 regular_cart_delivery_details">
                    <div className=" text-capitalize text-center regular_cart_title">
                      delivery time
                    </div>
                    <div className="row no-gutters regular_vendor_delivery_content_wrapper">
                      <div className="col-6 text-center regular_vendor_delivery_content">
                        <div className="theme-color mt-4">
                          {singleProduct.vendor_delivery
                            ? singleProduct.vendor_delivery.vendor_district
                            : 'none'}
                        </div>
                        {singleProduct.vendor_delivery
                          ? singleProduct.vendor_delivery.inside_deli_time
                          : 'none'}
                      </div>
                      <div className="col-6 text-center regular_vendor_delivery_content">
                        <div className="theme-color mt-4">Anywhere</div>
                        {singleProduct.vendor_delivery
                          ? singleProduct.vendor_delivery.outside_deli_time
                          : 'none'}
                      </div>
                    </div>
                  </div>
                </div>
                {localCart[grooupKey].map(function (item) {
                  return (
                    <ul className="regular_cart_sidebar_list">
                      <li key={item.product_id}>
                        <div className="regular_cart_single_product row no-gutters align-items-center">
                          <div className="regular_cart_single_image col-3 p-2">
                            <Link to={`/productdetails?product=${item?.slug}&id=${item?.product_id}`}>
                              <img
                                src={`https:${item.photo}`}
                                // src={`uparzonassets/uparzonimages/products/${item.photo}`}
                                alt="img-1"
                                onClick={() => props.getCartID(item.product_id)}
                              />
                            </Link>
                          </div>
                          <div className="regular_cart_single_name col">
                            <Link
                              to={`/productdetails?product=${item?.slug}&id=${item?.product_id}`}
                              onClick={() => props.getCartID(item.product_id)}>
                              {item.name}
                            </Link>
                          </div>
                          <div className="regular_cart_total_price text-right col-3">
                            <div className="regular_cart_price">
                              &#2547;{' '}
                              {(item?.price * item.total_quantity).toFixed(
                                2
                              )}
                            </div>
                            <div className="regular_cart_quantity">
                              <span
                                className={`quantity_btn ${
                                  item.total_quantity === 1 && 'pointer_disabled'
                                }`}
                                onClick={() =>decreamentProduct(item)}>
                                -
                              </span>
                              <input
                                type="text"
                                value={item.total_quantity}
                                defaultValue={item.total_quantity}
                              />
                              <span
                                className="quantity_btn "
                                onClick={() => increamentProduct(item)}>
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
                        </div>{' '}
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })
        : ''
  
      );
  // GROUP ITEMS ENDS LOGICS HERE

  return (
    <div>
      <div className="regular_cart_wrapper">
        {          
          !props.user ? 
          (non_campaign_products.length > 0 ?
            cartprod :
            <div className="d-flex flex-column justify-content-center align-items-center empty_cart_placeholder">
            <img src="uparzonassets/svg/icons/cart_icon/empty-cart.svg" alt="" />
            <div className="empty_cart_placeholder_text">
              no products
            </div>
          </div>)
          : (server_non_campaign_products.length > 0 ?
              cartprod :
              <div className="d-flex flex-column justify-content-center align-items-center empty_cart_placeholder">
              <img src="uparzonassets/svg/icons/cart_icon/empty-cart.svg" alt="" />
              <div className="empty_cart_placeholder_text">
                no products
              </div>
            </div>)
          
        }
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts*/}
      {non_campaign_products.length > 0 || server_non_campaign_products.length > 0 ? <CartButton
        setCart={props.setCart}
        loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
        is_campaign={false}
        campaign={props.campaign}
        setCampaign={props.setCampaign}
        prices={non_campaign_prices}
      />: ''}
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(RegularCartList));
