import { initialState } from '../Store/Store';
import {
  FILTER_NECCESSARY_PRODUCTS,
  NECCESSARY_PRODUCTS_ERROR,
  NECCESSARY_PRODUCTS_REQUEST,
  NECCESSARY_PRODUCTS_SUCCESS,
} from '../Types';

export const NeccessaryProdReducer = (state = initialState, action) => {
  switch (action.type) {
    case NECCESSARY_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        neccessaryResults: [],
        neccessaryCategories: [],
        neccessary_pages: [],
      };
    case NECCESSARY_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        neccessaryResults: action.results,
        neccessaryCategories: action.categories,
        neccessary_pages: action.pages,
      };
    case NECCESSARY_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        neccessaryResults: [],
        neccessaryCategories: [],
        neccessary_pages: [],
      };
    case FILTER_NECCESSARY_PRODUCTS:
      return {
        ...state,
        neccessaryResults: action.product,
      };
    default:
      return state;
  }
};
