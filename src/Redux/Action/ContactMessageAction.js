import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_RESPONSE_CLEAR,
} from '../Types';

const sendMessageRequest = () => {
  return {
    type: SEND_MESSAGE_REQUEST,
  };
};

const sendMessageSuccess = (res) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    success: res,
  };
};
const sendMessageError = (error) => {
  return {
    type: SEND_MESSAGE_ERROR,
    error,
  };
};
const clearMessageResponse = () => {
  return {
    type: SEND_MESSAGE_RESPONSE_CLEAR,
  };
};

export const SendContactMessage = (data) => async (dispatch) => {
  dispatch(sendMessageRequest());
  await API()
    .post(ENDPOINTS.SEND_CONTACT_MSG, data)
    .then((res) => {
      if (!res.data.status) {
        dispatch(sendMessageError(res.data.errors));
      } else {
        dispatch(sendMessageSuccess(res.data.message));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const ClearContactMessage = () => (dispatch) => {
  dispatch(clearMessageResponse());
};
