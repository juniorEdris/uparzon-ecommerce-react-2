import Axios from 'axios';
import {UserID} from '../../PrimarySections/Utility';
export const DOMAIN = `https://demostore.uparzon.com/`;
// export const DOMAIN = `https://store.uparzon.com/`;
export const api_key = `4e38d8be3269aa17280d0468b89caa4c7d39a699`;

let BaseApi = Axios.create({
  baseURL: DOMAIN,
});

export const API = () => {
  const authToken = localStorage.getItem('user_token');
  if (authToken) {
    BaseApi.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
  return BaseApi;
};

export const ENDPOINTS = {
  HOMEPRODUCT: `api/uparzonweb/get_home_products`,
  CATEGORIES: `api/uparzonweb/get_categories`,
  SEARCH: `api/uparzonweb/search_products`,
  PRODUCTDETAILS: `api/uparzonweb/get_product_details?product_id=`,
  SINGLE_BRAND_PRODUCTS: `api/uparzonweb/search_products`,
  CAMPAIGN_PRODUCTS: `api/uparzonweb/search_products`,
  ADDTOBASKET: `api/user/product/add_to_cart`,
  LOGIN: `https://demopartner.uparzon.com/api/partner/loginRequest?api_key=${api_key}`,
  LOG_OUT: `https://demopartner.uparzon.com/api/partner/logout`,
  VERIFY_PHONE: `https://demopartner.uparzon.com/api/partner/send-otp`,
  VERIFY_OTP: `https://demopartner.uparzon.com/api/partner/check-otp`,
  REGISTER: `https://demopartner.uparzon.com/api/partner/store/register`,
  GETCARTITEMS: `api/uparzonapp/user/get_cart_products?api_key=${api_key}&user_id=${UserID()}`,
  //
  CART_UPDATE: `api/user/cart_update/`,
  DELETEFROMBASKET: `api/cart/delete_product/`,
  GET_WISHLIST_ITEM: `api/user/wishlist_products`,
  ADD_WISHLIST_ITEM: `api/product/add_to_wishlist?`,
  UPDATE_WISHLIST_ITEM: `api/user/wishlist_update/`,
  DELETE_WISHLIST_ITEM: `api/delete/wishlist_product/`,
  USER_INFO: `api/get_user_info`,
  USER_UPDATE: `api/user_update`,
  PRESCRIPTION_UPLOAD: `api/app/prescription_store?`,
  SEND_CONTACT_MSG: `api/send/contact-us-message`,
  COUPON_TOKEN: `api/verify_coupon`,
  PLACE_ORDER: `api/app/make_order`,
  GET_ORDER_LIST: `api/get_orders`,
  CANCEL_ORDER: `api/cancel_order`,
  GET_BLOG_LIST: `api/web/get_blog_lists`,
  GET_SINGLE_BLOG: `api/web/get_blog_details`,
  GET_SINGLE_ORDER: `api/get_order_details`,
  CART_GUEST_CART: `api/product/add_to_cart`,
  WISH_GUEST_CART: `api/product/add_to_wishlist`,
};
