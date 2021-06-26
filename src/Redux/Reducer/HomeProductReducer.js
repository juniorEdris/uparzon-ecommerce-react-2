import { initialState } from '../Store/Store';
import {
  FETCH_HOME_CATEGORY_ERROR,
  FETCH_HOME_CATEGORY_REQUEST,
  FETCH_HOME_CATEGORY_SUCCESS,
  FETCH_HOME_CHILDCATEGORY_ERROR,
  FETCH_HOME_CHILDCATEGORY_REQUEST,
  FETCH_HOME_CHILDCATEGORY_SUCCESS,
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
  FETCH_HOME_SUBCATEGORY_ERROR,
  FETCH_HOME_SUBCATEGORY_REQUEST,
  FETCH_HOME_SUBCATEGORY_SUCCESS,
} from '../Types';

export const HomeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        allbanners: [],
        homeSlider: [],
        allProducts: [],
        basePath: [],
        campaigns: [],
      };
    case FETCH_HOME_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allbanners: action.banners,
        homeSlider: action.slider,
        allProducts: action.allProducts,
        basePath: action.basePath,
        campaigns: action.campaigns,
      };
    case FETCH_HOME_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        allbanners: [],
        homeSlider: [],
        allProducts: [],
        basePath: [],
        campaigns: [],
      };
    // CATEGORY
    case FETCH_HOME_CATEGORY_REQUEST:
      return {
        ...state,
        categoryloading: true,
        categories: [],
      };
    case FETCH_HOME_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryloading: false,
        categories: action.categories,
      };
    case FETCH_HOME_CATEGORY_ERROR:
      return {
        ...state,
        categoryloading: true,
        categories: [],
      };
    // SUBCATEGORY
    case FETCH_HOME_SUBCATEGORY_REQUEST:
      return {
        ...state,
        subCatloading: true,
        subcategories: [],
      };
    case FETCH_HOME_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        subCatloading: false,
        subcategories: action.subcategories,
      };
    case FETCH_HOME_SUBCATEGORY_ERROR:
      return {
        ...state,
        subCatloading: true,
        subcategories: [],
      };
    // CHILD CATEGORY
    case FETCH_HOME_CHILDCATEGORY_REQUEST:
      return {
        ...state,
        childCatloading: true,
        childcategories: [],
      };
    case FETCH_HOME_CHILDCATEGORY_SUCCESS:
      return {
        ...state,
        childCatloading: true,
        childcategories: action.childcategories,
      };
    case FETCH_HOME_CHILDCATEGORY_ERROR:
      return {
        ...state,
        childCatloading: true,
        childcategories: [],
      };
    default:
      return state;
  }
};
