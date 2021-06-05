import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_SINGLEBLOG_REQUEST,
  GET_SINGLEBLOG_SUCCESS,
  GET_SINGLEBLOG_ERROR,
} from '../Types';

const getBlogRequest = () => {
  return {
    type: GET_SINGLEBLOG_REQUEST,
  };
};
const getBlogSuccess = (res) => {
  return {
    type: GET_SINGLEBLOG_SUCCESS,
    result: res.data,
  };
};
const getBlogError = (error) => {
  return {
    type: GET_SINGLEBLOG_ERROR,
    error,
  };
};

export const getSingleBlog = (id) => async (dispatch) => {
  dispatch(getBlogRequest());
  await API()
    .post(`${ENDPOINTS.GET_SINGLE_BLOG}?blog_id=${id}`)
    .then((res) => {
      dispatch(getBlogSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getBlogError(error));
    });
};
