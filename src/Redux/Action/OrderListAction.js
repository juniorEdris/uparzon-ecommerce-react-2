import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_ORDER_LIST_ERROR,
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
} from '../Types';

const OrderListRequest = () => {
  return {
    type: GET_ORDER_LIST_REQUEST,
  };
};

const OrderListSuccess = (res) => {
  return {
    type: GET_ORDER_LIST_SUCCESS,
    results: res.data,
    pages: res.meta,
  };
};

const OrderListError = (error) => {
  return {
    type: GET_ORDER_LIST_ERROR,
  };
};

export const getOrderList = (data) => async (dispatch) => {
  dispatch(OrderListRequest());

  API()
    .get(`${ENDPOINTS.GET_ORDER_LIST}`)
    .then((res) => {
      if (res.data.status === false) {
        dispatch(OrderListError());
      } else {
        dispatch(OrderListSuccess(res.data));
      }
    })
    .catch((error) => {
      // dispatch(OrderListError());
      console.log(error);
    });
};
