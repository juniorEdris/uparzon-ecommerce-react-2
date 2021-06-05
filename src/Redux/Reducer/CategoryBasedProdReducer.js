import { initialState } from '../Store/Store';
import {
  CATEGORY_BASED_ERROR,
  CATEGORY_BASED_REQUEST,
  CATEGORY_BASED_SUCCESS,
} from '../Types';

export const CategoryBasedProdReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_BASED_REQUEST:
      return {
        ...state,
        loading: true,
        categoryProducts: [],
        categoryLists: [],
        categorypages: [],
      };
    case CATEGORY_BASED_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryProducts: action.results,
        categoryLists: action.categories,
        categorypages: action.pages,
      };
    case CATEGORY_BASED_ERROR:
      return {
        ...state,
        loading: true,
        categoryProducts: [],
        categoryLists: [],
        categorypages: [],
      };
    default:
      return state;
  }
};
