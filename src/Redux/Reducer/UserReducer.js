import { initialState } from '../Store/Store';
import {
  SET_USER,
  SET_USER_NULL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../Types';

export const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logOutRequest: true,
      };
    case SET_USER_NULL:
      return {
        ...state,
        user: action.user,
        logOutRequest: false,
      };
    default:
      return state;
  }
};
