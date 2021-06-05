import { initialState } from '../Store/Store';
import {
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_RESPONSE_CLEAR,
  SEND_MESSAGE_SUCCESS,
} from '../Types';

export const ContactPageMsg = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        error: {},
        contactConfirm: '',
        sendMsgReq: true,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        error: {},
        contactConfirm: action.success,
        sendMsgReq: false,
      };
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        error: {
          name: action.error.name && action.error.name[0],
          email: action.error.email && action.error.email[0],
          subject: action.error.subject && action.error.subject[0],
          message: action.error.message && action.error.message[0],
        },
        contactConfirm: action.success,
        sendMsgReq: false,
      };
    case SEND_MESSAGE_RESPONSE_CLEAR:
      return {
        ...state,
        error: {},
        contactConfirm: '',
        sendMsgReq: false,
      };
    default:
      return {
        ...state,
      };
  }
};
