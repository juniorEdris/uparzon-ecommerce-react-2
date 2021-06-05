import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_CART_ITEM_ERROR,
  GET_CART_ITEM_REQUEST,
  GET_CART_ITEM_SUCCESS,
} from '../Types';

const getCartItemRequest = () => ({
  type: GET_CART_ITEM_REQUEST,
});

const getCartItemSuccess = (res) => {
  return { type: GET_CART_ITEM_SUCCESS, cartItems: res };
};

const getCartItemError = (res) => ({
  type: GET_CART_ITEM_ERROR,
  error: res,
});

export const getCartItems = () => async (dispatch, getState) => {
  dispatch(getCartItemRequest());
  await API()
    .get(`${ENDPOINTS.GETCARTITEMS}`)
    .then((res) => {
      dispatch(getCartItemSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getCartItemError(err));
    });
};
