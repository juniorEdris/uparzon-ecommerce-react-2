import { initialState } from '../Store/Store';
import {
  GET_BLOGLIST_REQUEST,
  GET_BLOGLIST_SUCCESS,
  GET_BLOGLIST_ERROR,
} from '../Types';
export const BlogListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGLIST_REQUEST:
      return {
        ...state,
        loading: true,
        blogLists: [],
        blogsPage: [],
        error: { ...state.error },
      };
    case GET_BLOGLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogLists: action.result,
        blogsPage: action.pages,
        error: { ...state.error },
      };
    case GET_BLOGLIST_ERROR:
      return {
        ...state,
        loading: true,
        blogLists: [],
        blogsPage: [],
        error: { ...state.error, blogsError: action.error },
      };
    default:
      return state;
  }
};
