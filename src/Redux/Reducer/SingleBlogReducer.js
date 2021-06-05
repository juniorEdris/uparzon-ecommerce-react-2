import { initialState } from '../Store/Store';
import {
  GET_SINGLEBLOG_REQUEST,
  GET_SINGLEBLOG_SUCCESS,
  GET_SINGLEBLOG_ERROR,
} from '../Types';

export const SingleBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLEBLOG_REQUEST:
      return {
        ...state,
        loading: true,
        singleBlog: [],
        error: { ...state.error },
      };
    case GET_SINGLEBLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        singleBlog: action.result,
        error: { ...state.error },
      };
    case GET_SINGLEBLOG_ERROR:
      return {
        ...state,
        loading: true,
        singleBlog: {},
        error: { ...state.error, blogError: action.error },
      };
    default:
      return state;
  }
};
