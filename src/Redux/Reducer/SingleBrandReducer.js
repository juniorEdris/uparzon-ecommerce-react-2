import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  FILTER_PRODUCTS,
  SINGLE_BRAND_PRODUCT_ERROR,
  SINGLE_BRAND_PRODUCT_REQUEST,
  SINGLE_BRAND_PRODUCT_SUCCESS,
} from '../Types';
import { initialState } from '../Store/Store';

export const SingleCompanyProducts = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_BRAND_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        company_products: [],
        company_categories: [],
        company_pages: [],
      };
    case SINGLE_BRAND_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        company_products: action.results,
        company_categories: action.categories,
        company_pages: action.pages,
      };
    case SINGLE_BRAND_PRODUCT_ERROR:
      return {
        ...state,
        loading: true,
        company_products: [],
        company_categories: [],
        company_pages: [],
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        company_products: action.product,
      };
    default:
      return {
        ...state,
      };
  }
};
