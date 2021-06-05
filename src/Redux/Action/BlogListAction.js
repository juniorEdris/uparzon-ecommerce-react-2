import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_BLOGLIST_REQUEST,
  GET_BLOGLIST_SUCCESS,
  GET_BLOGLIST_ERROR,
} from '../Types';

const getBlogListRequest = () => {
  return {
    type: GET_BLOGLIST_REQUEST,
  };
};
const getBlogListSuccess = (res) => {
  return {
    type: GET_BLOGLIST_SUCCESS,
    result: res.data,
    pages: res.meta,
  };
};
const getBlogListError = (error) => {
  return {
    type: GET_BLOGLIST_ERROR,
    error,
  };
};

export const getBlogList = (data) => async (dispatch) => {
  const { page } = data;
  dispatch(getBlogListRequest());
  await API()
    .post(`${ENDPOINTS.GET_BLOG_LIST}?per_page=20&page=${page}`)
    .then((res) => {
      dispatch(getBlogListSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getBlogListError(error));
    });
};
