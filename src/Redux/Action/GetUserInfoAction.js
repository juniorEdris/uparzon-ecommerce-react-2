import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_AREAS,
} from '../Types';

const getUserInfoRequest = () => ({
  type: GET_USER_INFO_REQUEST,
});
const getUserInfoSuccess = (res) => ({
  type: GET_USER_INFO_SUCCESS,
  deliveryTypes: res.delivery_type,
  info: res.order_info,
  status: res.status,
});
const getUserInfoError = (error) => ({
  type: GET_USER_INFO_ERROR,
  error,
});
//  Get Areas
const GetUserArea = (areas) => {
  return { type: GET_USER_AREAS, areas };
};

export const getUserInfo = () => async (dispatch) => {
  dispatch(getUserInfoRequest());
  await API()
    .get(ENDPOINTS.USER_INFO)
    .then((res) => {
      dispatch(getUserInfoSuccess(res.data));
    })
    .catch((error) => {
      console.log(error.Response);
    });
};

export const GetAreaOption = (id) => (dispatch, getState) => {
  let userInfo = getState().UserInfo.info.districts_lists;
  const areas = userInfo?.slice().filter((x) => x.id === Number(id));
  dispatch(GetUserArea(areas));
};
