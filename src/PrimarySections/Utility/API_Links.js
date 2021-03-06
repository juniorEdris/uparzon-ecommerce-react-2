import Axios from 'axios';
// export const PARTNER = `https://demopartner.uparzon.com/`;
// export const DOMAIN = `https://demostore.uparzon.com/`;
export const DOMAIN = `https://store.uparzon.com/`;
export const PARTNER = `https://partner.uparzon.com/`;
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
  CATEGORY_PRODUCTS: `api/uparzonweb/search_category_products`,
  SEARCH: `api/uparzonweb/search_products`,
  PRODUCTDETAILS: `api/uparzonweb/get_product_details?product_id=`,
  SINGLE_BRAND_PRODUCTS: `api/uparzonweb/search_products`,
  CAMPAIGN_PRODUCTS: `api/uparzonweb/search_category_products`,
  LOGIN: `${PARTNER}api/partner/loginRequest?api_key=${api_key}`,
  LOG_OUT: `${PARTNER}api/partner/logout`,
  VERIFY_PHONE: `${PARTNER}api/partner/send-otp`,
  VERIFY_OTP: `${PARTNER}api/partner/check-otp`,
  REGISTER: `${PARTNER}api/partner/store/register`,
  ADDTOBASKET: `api/user/product/add_to_cart`,
  CART_UPDATE: `api/user/cart_update/`,
  GETCARTITEMS: `api/uparzonapp/user/get_cart_products?api_key=${api_key}`,
  DELETEFROMBASKET: `api/uparzonweb/cart/delete_product/`,
  GETDISTRICTS: `api/uparzonweb/get_districts?api_key=${api_key}`,
  PLACE_ORDER: `api/uparzonapp/latest_place_order?api_key=${api_key}`,
  GET_ORDER_LIST: `api/uparzonapp/get_orders?api_key=${api_key}`,
  GET_SINGLE_ORDER: `api/uparzonapp/get_order_details?api_key=${api_key}`,
  GET_REWARD_CASH: `${PARTNER}api/partner/store/getBalance`,
  COUPON_TOKEN: `api/uparzonapp/verify_coupon`,
  GET_WISHLIST_ITEM: `api/get_wishlists?api_key=${api_key}`,
  ADD_WISHLIST_ITEM: `api/add_wishlist?api_key=${api_key}`,
  DELETE_WISHLIST_ITEM: `api/remove_wishlist?api_key=${api_key}`,
  WISH_TO_CART: `api/transfer/wishlist-to-cart`,
  CHANGE_PASSWORD: `${PARTNER}api/partner/changePassword`,
  //
  UPDATE_WISHLIST_ITEM: `api/user/wishlist_update/`,
  USER_INFO: `api/uparzonweb/get_user_info?api_key=${api_key}`,
  USER_UPDATE: `api/user_update`,
  PRESCRIPTION_UPLOAD: `api/app/prescription_store?`,
  SEND_CONTACT_MSG: `api/send/contact-us-message`,
  CANCEL_ORDER: `api/cancel_order`,
  GET_BLOG_LIST: `api/web/get_blog_lists`,
  GET_SINGLE_BLOG: `api/web/get_blog_details`,
  CART_GUEST_CART: `api/product/add_to_cart`,
  WISH_GUEST_CART: `api/product/add_to_wishlist`,
};
