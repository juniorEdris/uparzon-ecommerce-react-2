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
    results: res.data || [],
    pages: res.meta,
  };
};

const OrderListError = (error) => {
  return {
    type: GET_ORDER_LIST_ERROR,
    error
  };
};

export const getOrderList = (data) => async (dispatch) => {
  const user = localStorage.getItem('user_id')
  dispatch(OrderListRequest());
  API()
    .get(`${ENDPOINTS.GET_ORDER_LIST}&user_id=${user}`)
    .then((res) => {
      // console.log(res,'Order');
      // if (!res.data.status) {
      //   dispatch(OrderListError());
      // } else {
      //   dispatch(OrderListSuccess(res.data));
      // }
      dispatch(OrderListSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
