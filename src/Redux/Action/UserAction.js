import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import { SET_USER, SET_USER_NULL, LOGOUT_REQUEST } from '../Types';

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const setUser = (user) => ({
  type: SET_USER,
  user,
});
const logoutSuccess = (user) => ({
  type: SET_USER_NULL,
  user,
});

export const setUserAction = (user) => (dispatch, getState) => {
  dispatch(setUser(true));
};
export const LogOutAction = () => async (dispatch, getState) => {
  dispatch(logoutRequest());
  await API()
    .post(`${ENDPOINTS.LOG_OUT}`)
    .then((res) => {
      if (!res.data.status) {
        console.log('log out failed');
      } else {
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_id');
        dispatch(logoutSuccess(false));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
