import { UserID } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  PRESCRIPTION_UPLOAD_REQUEST,
  PRESCRIPTION_UPLOAD_SUCCESS,
  PRESCRIPTION_UPLOAD_ERROR,
  PRESCRIPTION_UPLOAD_SUCCESS_COMPLETE,
  PRESCRIPTION_UPLOAD_FINISHED,
} from '../Types';

const prescriptionUploadRequest = () => {
  return {
    type: PRESCRIPTION_UPLOAD_REQUEST,
  };
};
const prescriptionUploadSuccess = (res) => {
  return {
    type: PRESCRIPTION_UPLOAD_SUCCESS,
    results: res.message,
    status: res.status,
  };
};
const prescriptionUploadComplete = (res) => {
  return {
    type: PRESCRIPTION_UPLOAD_SUCCESS_COMPLETE,
  };
};
const prescriptionUploadError = (error) => {
  return {
    type: PRESCRIPTION_UPLOAD_ERROR,
    error,
  };
};
const clearSuccessMsg = () => {
  return {
    type: PRESCRIPTION_UPLOAD_FINISHED,
  };
};

export const PrescriptionUpload = (name, image) => async (dispatch) => {
  const user_id = localStorage.getItem('user_id');
  dispatch(prescriptionUploadRequest());
  await API()
    .post(
      `${ENDPOINTS.PRESCRIPTION_UPLOAD}user_id=${user_id}&name=${name}`,
      image
    )
    .then((res) => {
      if (!res.data.status) {
        dispatch(prescriptionUploadError(res.data.errors));
      } else {
        dispatch(prescriptionUploadSuccess(res.data));
        // setTimeout(() => {
        //   dispatch(prescriptionUploadComplete());
        // }, 6000);
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const clearSuccessPrescription = () => (dispatch) => {
  dispatch(clearSuccessMsg());
};
