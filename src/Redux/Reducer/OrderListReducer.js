import {
  GET_ORDER_LIST_ERROR,
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
} from '../Types';
import { initialState } from '../Store/Store';

export const OrderListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        orders: [],
        pendingorders: [],
        completedOrders: [],
        order_pages: [],
        onDeliverOrders: [],
      };
    case GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.results,
        pendingOrders: action.results.filter(
          (x) => x.delivery_status !== 'completed'
        ),
        completedOrders: action.results.filter(
          (x) => x.delivery_status === 'completed'
        ),
        onDeliverOrders: action.results.filter(
          (x) => x.delivery_status === 'on delivery'
        ),
        order_pages: action.pages,
      };
    case GET_ORDER_LIST_ERROR:
      return {
        ...state,
        loading: false,
        orders: [],
        pendingorders: [],
        completedOrders: [],
        order_pages: [],
        onDeliverOrders: [],
      };
    default:
      return {
        ...state,
      };
  }
};
