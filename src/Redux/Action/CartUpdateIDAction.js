import { GET_CART_UPDATE_ID, REMOVE_CART_UPDATE_ID } from '../Types';

const getCartupdateID = (id) => {
  return { type: GET_CART_UPDATE_ID, id };
};
const removeCartupdateID = () => {
  return { type: REMOVE_CART_UPDATE_ID };
};

export const getCartUpdateID = (id) => (dispatch, getState) => {
  dispatch(getCartupdateID(id));
};

export const removeCartUpdateID = () => (dispatch, getState) => {
  dispatch(removeCartupdateID());
};
