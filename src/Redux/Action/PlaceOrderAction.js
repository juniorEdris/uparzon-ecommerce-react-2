import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_COMPLETE,
} from '../Types';
const placeOrderRequest = () => {
  return {
    type: PLACE_ORDER_REQUEST,
  };
};

const placeOrderSuccess = (res) => {
  return {
    type: PLACE_ORDER_SUCCESS,
    res,
  };
};

const placeOrderError = (err) => {
  return {
    type: PLACE_ORDER_ERROR,
    err,
  };
};
const placeOrderComplete = () => {
  return {
    type: PLACE_ORDER_COMPLETE,
  };
};

export const PlaceOrder = (data) => async (dispatch) => {
  dispatch(placeOrderRequest());
  await API()
    .post(
      `${ENDPOINTS.PLACE_ORDER}?name=${data.name}&email=${
        data.email
      }&delivery_charge=${data.delivery_charge}&coupon_id=${
        data.coupon_id || ''
      }&coupon_discount=${data.coupon_discount || ''}&payment_method=${
        data.payment_type
      }&district_id=${data.district}&area_id=${data.area}&address=${
        data.address
      }&zip=${data.zip}`
    )
    .then((res) => {
      if (!res.data.status) {
        dispatch(placeOrderError(res.data));
      } else {
        dispatch(placeOrderSuccess(res.data));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const PlaceOrderClearState = () => (dispatch) =>
  dispatch(placeOrderComplete());
