import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_ERROR,
} from '../Types';

const fetchSearchRequest = () => ({
  type: SEARCH_PRODUCTS_REQUEST,
});

const fetchSearchSuccess = (res) => {
  return {
    type: SEARCH_PRODUCTS_SUCCESS,
    searchResults: res.data,
    pages: res.meta,
  };
};
const fetchSearchError = (error) => ({
  type: SEARCH_PRODUCTS_ERROR,
  error,
});

export const GetSearchResults = (data) => async (dispatch) => {
  const { keywords = '', category, subcategory, childcategory, page } = data;
  dispatch(fetchSearchRequest());
  // keyword&category_id&subcategory_id&childcategory_id&is_latest&is_popular&is_flash
  await API()
    .get(
      `${
        ENDPOINTS.SEARCH
      }?keyword=${keywords}&category_id=${category}&subcategory_id=${subcategory}&childcategory_id=${childcategory}&is_latest=${''}&is_popular=${''}&is_flash=${''}&per_page=20&page=${page}`
    )
    .then((res) => {
      console.log('====================search================');
      console.log(res);
      console.log('====================================');
      dispatch(fetchSearchSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchSearchError(error));
    });
};
export const GetCategoryResults = (data) => async (dispatch) => {
  console.log('THIS ACTION WILL BE REMOVEN');
};
