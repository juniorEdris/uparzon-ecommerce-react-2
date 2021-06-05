import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  FETCH_PRODUCT_DETAILS_ERROR,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
} from '../Types';

const fetchProductDetailsRequest = () => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
});

const fetchProductDetailsSuccess = (res) => {
  return {
    type: FETCH_PRODUCT_DETAILS_SUCCESS,
    details: res,
    related: res.related_product,
  };
};
const fetchProductDetailsError = (error) => ({
  type: FETCH_PRODUCT_DETAILS_ERROR,
  error,
});

export const GetProductDetails = (id) => async (dispatch) => {
  dispatch(fetchProductDetailsRequest());

  await API()
    .post(`${ENDPOINTS.PRODUCTDETAILS}${id}`)
    .then((res) => {
      dispatch(fetchProductDetailsSuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchProductDetailsError(error));
    });
};
