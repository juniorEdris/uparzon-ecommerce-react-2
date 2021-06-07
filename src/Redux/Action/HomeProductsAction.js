import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
} from '../Types';

const fetchHomeProductsRequest = () => ({
  type: FETCH_HOME_PRODUCTS_REQUEST,
});

const fetchHomeProductsSuccess = (res) => {
  return {
    type: FETCH_HOME_PRODUCTS_SUCCESS,
    categories: res.uparzon_categories,
    categoryProducts: res.category_products,
    slider: res.home_page_slider,
    // homeBrands: res.companies.data,
    // popularProducts: res.trending_products.data,
    // neccessaryProducts: res.products.data,
    // commonProducts: res.common_products.data,
    // homeBlogs: res.blogs,
    // video: res.home_page_right_video,
    // brand_bottom_banner: res.brand_bottom_banner,
    // healthCareBanner: res.top_small_banners.data,
    // top_large_banner: res.top_large_banner,
    // bottom_large_banner: res.bottom_large_banner,
    // appBanner: res.footer_top_large_banner,
    allProducts: res.products,
    basePath: res.img_base_path,
  };
};
const fetchHomeProductsError = (error) => ({
  type: FETCH_HOME_PRODUCTS_ERROR,
  error,
});

export const GetHomeContents = () => async (dispatch) => {
  dispatch(fetchHomeProductsRequest());
  await API()
    .get(ENDPOINTS.HOMEPRODUCT)
    .then((res) => {
      console.log('home', res);
      dispatch(fetchHomeProductsSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeProductsError(error));
    });
};
