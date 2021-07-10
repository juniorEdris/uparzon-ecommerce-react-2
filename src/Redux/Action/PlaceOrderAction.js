import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  PLACE_ORDER_COMPLETE,
  PLACE_ORDER_POPUP_CLEAR,
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
const placeOrderClearMsg = () => {
  return {
    type: PLACE_ORDER_POPUP_CLEAR,
  };
};
export const PlaceOrder = (data) => async (dispatch) => {
  const user = localStorage.getItem('user_id');
  const campaign = data.is_campaign.toString()
  console.log(typeof(campaign))
  // data.adjusted_amount
  dispatch(placeOrderRequest());
  await API()
    .post(
      `${ENDPOINTS.PLACE_ORDER}&user_id=${user}&shipping_phone=${data.phone}&shipping_name=${data.name}&shipping_district_id=${data.district}&shipping_address=${data.address}shipping_upazilla_id=${data.district}&shipping_union_id=${data.area}&shipping_city=${''}&shipping_zip=${''}&billing_address_id=${''}&coupon_discount=${data.coupon_discount}&rc_adjusted_amount=${data.adjusted_amount}&shipping_email=${data.email}&payment_method=${data.payment_type}&tax=${''}&packing_cost=${''}&coupon_id=${data.coupon_id}&total_delivery_charge=${''}&is_campaign=${campaign}&order_note=order from web`
    )
    .then((res) => {
      console.log('place order',res);
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

export const PlaceOrderClearMsg = () => (dispatch) =>
  dispatch(placeOrderClearMsg());
