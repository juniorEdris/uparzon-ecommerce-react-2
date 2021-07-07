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
  /*
   &user_id={{user_id}}&shipping_phone=&shipping_name=&shipping_district_id=&shipping_upazilla_id=&shipping_union_id=&shipping_city=&shipping_zip=&billing_address_id =&coupon_discount=&rc_adjusted_amount=&shipping_email=&payment_method=&tax=&packing_cost=&coupon_id=&total_delivery_charge=50&is_campaign=false
  */
   const user = localStorage.getItem('user_id');
 const url = `${ENDPOINTS.PLACE_ORDER}&user_id=${user}&name=${data.name}&email=${
   data.email
 }&delivery_charge=${data.delivery_charge}&coupon_id=${
   data.coupon_id || ''
 }&coupon_discount=${data.coupon_discount || ''}&payment_method=${
   data.payment_type
 }&district_id=${data.district}&area_id=${data.area}&address=${
   data.address
    }&zip=${data.zip}`
  // console.log('action page',data);
  // dispatch(placeOrderRequest());
  await API()
    .post(
      `${ENDPOINTS.PLACE_ORDER}&shipping_phone=${data.phone}&shipping_name=${data.name}&shipping_district_id=${data.district}&shipping_upazilla_id=${data.district}&shipping_union_id=${data.area}&shipping_city=&shipping_zip=&billing_address_id=&coupon_discount=${data.coupon_discount || ''}&rc_adjusted_amount=${''}&shipping_email=${data.email}&payment_method=${data.payment_type}&tax=${''}&packing_cost=${''}&coupon_id=${data.coupon_id}&total_delivery_charge=${data.delivery_charge}&is_campaign=false`
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
