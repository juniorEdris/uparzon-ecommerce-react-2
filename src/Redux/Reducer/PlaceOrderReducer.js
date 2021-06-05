import { initialState } from '../Store/Store';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_COMPLETE,
} from '../Types';
export const PlaceOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        placingOrder: true,
        loading: true,
        place_order_msg: '',
        order_error: '',
        place_order_status: '',
        place_order_id: '',
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        placingOrder: false,
        loading: false,
        place_order_msg: action.res.message,
        place_order_status: action.res.status,
        place_order_id: action.res.order_id,
        order_error: '',
      };
    case PLACE_ORDER_COMPLETE:
      return {
        ...state,
        placingOrder: false,
        loading: false,
        place_order_msg: '',
        order_error: '',
        place_order_status: '',
        place_order_id: '',
      };
    case PLACE_ORDER_ERROR:
      return {
        ...state,
        placingOrder: true,
        loading: true,
        place_order_msg: '',
        order_error: action.error,
        place_order_status: '',
        place_order_id: '',
      };
    default:
      return { ...state };
  }
};
