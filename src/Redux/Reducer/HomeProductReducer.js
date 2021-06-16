import { initialState } from '../Store/Store';
import {
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
} from '../Types';

export const HomeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        categories: [],
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
        categories: action.categories,
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
        categories: [],
        homeSlider: [],
        allProducts: [],
        basePath: [],
        campaigns: [],
      };
    default:
      return state;
  }
};
