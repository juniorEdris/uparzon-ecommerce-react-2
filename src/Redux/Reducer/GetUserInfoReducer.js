import { initialState } from '../Store/Store';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_AREAS,
} from '../Types';

export const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        delivery_types: [],
        info: [],
        status: [],
        userAreas: [],
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        delivery_types: action.deliveryTypes,
        info: action.info,
        status: action.status,
        userAreas: [],
      };
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        loading: true,
        delivery_types: [],
        info: [],
        status: [],
        error: action.error,
        userAreas: [],
      };
    case GET_USER_AREAS:
      return {
        ...state,
        userAreas: action.areas,
      };
    default:
      return {
        ...state,
      };
  }
};
