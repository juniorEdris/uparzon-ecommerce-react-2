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
        homeSlider: [],
        homeBrands: [],
        popularProducts: [],
        commonProducts: [],
        neccessaryProducts: [],
        homeBlogs: [],
        homeVideo: [],
        homebrandBtmBanner: [],
        healthCareBanner: [],
        hometoplargeBannner: [],
        homebtmLargeBanner: [],
        homeappBanner: [],
        primaryProducts: [],
      };
    case FETCH_HOME_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.categories,
        homeSlider: action.slider,
        homeBrands: action.homeBrands,
        popularProducts: action.popularProducts,
        commonProducts: action.commonProducts,
        neccessaryProducts: action.neccessaryProducts,
        homeBlogs: action.homeBlogs,
        homeVideo: action.video,
        homebrandBtmBanner: action.brand_bottom_banner,
        healthCareBanner: action.healthCareBanner,
        hometoplargeBannner: action.top_large_banner,
        homebtmLargeBanner: action.bottom_large_banner,
        homeappBanner: action.appBanner,
        primaryProducts: action.primaryProducts,
      };
    case FETCH_HOME_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        categories: [],
        homeSlider: [],
        homeBrands: [],
        popularProducts: [],
        commonProducts: [],
        neccessaryProducts: [],
        homeBlogs: [],
        homeVideo: [],
        homebrandBtmBanner: [],
        healthCareBanner: [],
        hometoplargeBannner: [],
        homebtmLargeBanner: [],
        homeappBanner: [],
      };
    default:
      return state;
  }
};
