import { UserID } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_AREAS,
  GET_USER_DISTRICTS,
  GET_USER_UPAZILA,
} from '../Types';

const getUserInfoRequest = () => ({
  type: GET_USER_INFO_REQUEST,
});
const getUserInfoSuccess = (res) => ({
  type: GET_USER_INFO_SUCCESS,
  info: res.data,
});
const getUserInfoError = (error) => ({
  type: GET_USER_INFO_ERROR,
  error,
});
//  Get Districts/Areas
const GetUserDistricts = (districts) => {
  return { type: GET_USER_DISTRICTS, districts };
};
const GetUserUpazila = (upazilla) => {
  return { type: GET_USER_UPAZILA, upazilla };
};
const GetUserArea = (areas) => {
  return { type: GET_USER_AREAS, areas };
};

export const getUserInfo = () => async (dispatch) => {
  dispatch(getUserInfoRequest());
  await API()
    .post(`${ENDPOINTS.USER_INFO}&user_id=${UserID()}`)
    .then((res) => {
      dispatch(getUserInfoSuccess(res.data));
    })
    .catch((error) => {
      console.log(error.Response);
    });
};

export const GetUserDistrict = () =>async (dispatch, getState) => {
  await API()
    .post(`${ENDPOINTS.GETDISTRICTS}`)
    .then((res) => {
      dispatch(GetUserDistricts(res.data.data));
    })
    .catch((error) => {
      console.log(error.Response);
    });
};
export const GetUserUpazilla = (id) => (dispatch, getState) => {
  let userInfo = getState().UserInfo.districts_lists;
  const upazilla = userInfo?.slice().filter((x) => x.id === Number(id));
  dispatch(GetUserUpazila(upazilla));
};
export const GetAreaOption = (id) => (dispatch, getState) => {
  let userInfo = getState().UserInfo.userUpazilla[0]?.upazilas;
  const areas = userInfo?.slice().filter((x) => x.id === Number(id));
  dispatch(GetUserArea(areas));
};
