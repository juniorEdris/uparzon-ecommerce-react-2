import { initialState } from '../Store/Store';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_AREAS,
  GET_USER_DISTRICTS,
  GET_USER_UPAZILA,
} from '../Types';

export const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        info: {},
        userUpazilla: [],
        userAreas: [],
      };
      case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.info,
        userAreas: [],
      };
      case GET_USER_INFO_ERROR:
        return {
          ...state,
          loading: true,
          info: {},
          userAreas: [],
        userUpazilla: [],
        error: action.error,
      };
    case GET_USER_DISTRICTS:
      return {
        ...state,
        districts_lists: action.districts,
      };
    case GET_USER_UPAZILA:
      return {
        ...state,
        userUpazilla: action.upazilla,
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
