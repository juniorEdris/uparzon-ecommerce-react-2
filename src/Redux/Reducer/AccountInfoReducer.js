import { initialState } from '../Store/Store';
import {
  ACCOUNT_INFO_SUBMIT_REQUEST,
  ACCOUNT_INFO_SUBMIT_SUCCESS,
  ACCOUNT_INFO_SUBMIT_ERROR,
  ACCOUNT_INFO_SUBMIT_SUCCESS_RESPONSE_CLEAR,
} from '../Types';

export const AccountInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INFO_SUBMIT_REQUEST:
      return {
        ...state,
        storeInfoloading: true,
        storeInfoStatus: '',
      };
    case ACCOUNT_INFO_SUBMIT_SUCCESS:
      return {
        ...state,
        storeInfoloading: false,
        storeInfoStatus: action.res,
      };
    case ACCOUNT_INFO_SUBMIT_ERROR:
      return {
        ...state,
        storeInfoloading: false,
        storeInfoStatus: '',
      };
    case ACCOUNT_INFO_SUBMIT_SUCCESS_RESPONSE_CLEAR:
      return {
        ...state,
        storeInfoloading: false,
        storeInfoStatus: '',
      };

    default:
      return state;
  }
};
