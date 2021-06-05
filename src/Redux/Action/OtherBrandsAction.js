import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  OTHER_BRAND_REQUEST,
  OTHER_BRAND_SUCCESS,
  OTHER_BRAND_ERROR,
} from '../Types';

const otherBrandRequest = () => {
  return {
    type: OTHER_BRAND_REQUEST,
  };
};

const otherBrandSuccess = (res) => {
  return {
    type: OTHER_BRAND_SUCCESS,
    results: res.data,
    pages: res.meta,
  };
};

const otherBrandError = (error) => {
  return {
    type: OTHER_BRAND_ERROR,
    error,
  };
};

export const getOtherBrands = (data) => async (dispatch) => {
  dispatch(otherBrandRequest());

  API()
    .post(`${ENDPOINTS}?`)
    .then((res) => {
      dispatch(otherBrandSuccess(res.data));
    })
    .catch((error) => {
      dispatch(otherBrandError(error));
      console.log(error);
    });
};
