import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SINGLE_ORDER_ERROR,
  SINGLE_ORDER_REQUEST,
  SINGLE_ORDER_SUCCESS,
} from '../Types';

const SingleOrderRequest = () => {
  return {
    type: SINGLE_ORDER_REQUEST,
  };
};

const SingleOrderSuccess = (res) => {
  return {
    type: SINGLE_ORDER_SUCCESS,
    results: res.data,
  };
};

const SingleOrderSuccessError = (error) => {
  return {
    type: SINGLE_ORDER_ERROR,
    error,
  };
};

export const getSingleOrderDetails = (data) => async (dispatch) => {
  dispatch(SingleOrderRequest());

  API()
    .post(`${ENDPOINTS.GET_SINGLE_ORDER}?order_id=${data}`)
    .then((res) => {
      dispatch(SingleOrderSuccess(res.data));
    })
    .catch((error) => {
      dispatch(SingleOrderSuccessError());
      console.log(error);
    });
};
