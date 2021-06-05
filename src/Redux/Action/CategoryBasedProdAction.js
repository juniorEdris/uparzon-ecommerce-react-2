import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  CATEGORY_BASED_REQUEST,
  CATEGORY_BASED_SUCCESS,
  CATEGORY_BASED_ERROR,
} from '../Types';

const categoryBasedRequest = () => {
  return {
    type: CATEGORY_BASED_REQUEST,
  };
};

const categoryBasedSuccess = (res) => {
  return {
    type: CATEGORY_BASED_SUCCESS,
    results: res.products.data,
    categories: res.categories,
    pages: res.products.meta,
  };
};

const categoryBasedError = (error) => {
  return {
    type: CATEGORY_BASED_ERROR,
    error,
  };
};

export const GetCategoryBasedProd = (data) => async (dispatch) => {
  const { keywords, category_id = '', subcategory, childcategory, page } = data;
  dispatch(categoryBasedRequest());
  await API()
    .get(
      `${ENDPOINTS.HOMEPRODUCT}?per_page=20&page=${page}&category_id=${category_id}`
    )
    .then((res) => {
      dispatch(categoryBasedSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(categoryBasedError(error));
    });
};
