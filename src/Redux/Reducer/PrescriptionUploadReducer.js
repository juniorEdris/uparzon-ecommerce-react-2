import { initialState } from '../Store/Store';
import {
  PRESCRIPTION_UPLOAD_REQUEST,
  PRESCRIPTION_UPLOAD_SUCCESS,
  PRESCRIPTION_UPLOAD_ERROR,
  PRESCRIPTION_UPLOAD_SUCCESS_COMPLETE,
  PRESCRIPTION_UPLOAD_FINISHED,
} from '../Types';

export const PrescriptionUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESCRIPTION_UPLOAD_REQUEST:
      return {
        ...state,
        uploadloading: true,
        prescriptionSuccess: '',
        prescriptionStatus: false,
        error: {},
      };
    case PRESCRIPTION_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadloading: false,
        prescriptionSuccess: action.results,
        prescriptionStatus: action.status,
        error: {},
      };
    case PRESCRIPTION_UPLOAD_SUCCESS_COMPLETE:
      return {
        ...state,
        uploadloading: false,
        prescriptionSuccess: '',
        prescriptionStatus: false,
        error: {},
      };
    case PRESCRIPTION_UPLOAD_ERROR:
      return {
        ...state,
        prescriptionSuccess: '',
        prescriptionStatus: false,
        error: { prescription: action.error.images[0] },
      };
    case PRESCRIPTION_UPLOAD_FINISHED:
      return {
        ...state,
        prescriptionSuccess: '',
        prescriptionStatus: false,
      };
    default:
      return {
        ...state,
      };
  }
};
