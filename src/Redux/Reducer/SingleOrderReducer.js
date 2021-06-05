import {
  SINGLE_ORDER_ERROR,
  SINGLE_ORDER_REQUEST,
  SINGLE_ORDER_SUCCESS,
} from '../Types';
import { initialState } from '../Store/Store';

export const SingleOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        orderDetails: [],
        error: {},
      };
    case SINGLE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetails: action.results,
        error: {},
      };
    case SINGLE_ORDER_ERROR:
      return {
        ...state,
        loading: true,
        orderDetails: [],
        error: { ...state.error, orderdDetailsError: action.error },
      };
    default:
      return {
        ...state,
      };
  }
};
