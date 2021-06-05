import { initialState } from '../Store/Store';
import {
  ADD_TO_LOCAL_WISHLIST_SUCCESS,
  ADD_TO_ONLINE_WISHLIST_SUCCESS,
  ADD_TO_WISHCART_MSG,
  ADD_TO_WISHLIST_ERROR,
  ADD_TO_WISHLIST_REQUEST,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  REMOVE_FROM_LOCAL_WISHLIST,
  REMOVE_FROM_ONLINE_WISHLIST,
  WISHCART_STATUS_COMPLETE,
  WISHCART_STATUS_SUCCESS,
} from '../Types';

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    //   WISHLIST ADD FUNCTIONALITY
    case ADD_TO_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        wishlist: [],
        error: '',
      };
    case ADD_TO_LOCAL_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        localWishlist: action.product,
        error: '',
      };
    case ADD_TO_ONLINE_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlistMsg: action.message,
        wishlistStatus: true,
        error: '',
      };
    case REMOVE_FROM_LOCAL_WISHLIST:
      return {
        ...state,
        loading: false,
        localWishlist: action.product,
        error: '',
      };
    case REMOVE_FROM_ONLINE_WISHLIST:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case ADD_TO_WISHLIST_ERROR:
      return {
        ...state,
        loading: true,
        wishlist: [],
        localWishlist: [],
        error: action.error,
      };
    //   WISHLIST GET FUNCTIONALITY
    case GET_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        wishlist: [],
        error: '',
      };
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlist: action.products,
        error: '',
      };
    case GET_WISHLIST_ERROR:
      return {
        ...state,
        loading: true,
        wishlist: [],
        error: action.error,
      };
    case ADD_TO_WISHCART_MSG:
      return {
        ...state,
        wishlistMsg: action.message,
        // wishlistStatus: true,
      };
    case WISHCART_STATUS_SUCCESS:
      return {
        ...state,
        wishlistStatus: action.status,
      };
    case WISHCART_STATUS_COMPLETE:
      return {
        ...state,
        wishlistStatus: action.status,
      };

    default:
      return {
        ...state,
      };
  }
};
