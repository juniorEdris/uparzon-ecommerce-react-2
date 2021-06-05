import { initialState } from '../Store/Store';
import {
  GET_CART_ITEM_ERROR,
  GET_CART_ITEM_REQUEST,
  GET_CART_ITEM_SUCCESS,
} from '../Types';

export const CartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        basket: [],
        error: '',
      };
    case GET_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        basket: action.cartItems,
        error: '',
      };
    case GET_CART_ITEM_ERROR:
      return {
        ...state,
        loading: true,
        basket: [],
        error: action.error,
      };
    default:
      return state;
  }
};
