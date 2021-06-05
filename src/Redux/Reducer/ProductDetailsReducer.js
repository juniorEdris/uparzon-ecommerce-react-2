import { initialState } from '../Store/Store';
import {
  FETCH_PRODUCT_DETAILS_ERROR,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
} from '../Types';

export const ProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        productDetails: {},
        suggestions: [],
      };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.details,
        suggestions: action.related,
      };
    case FETCH_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        loading: true,
        productDetails: {},
        suggestions: [],
      };
    default:
      return state;
  }
};
