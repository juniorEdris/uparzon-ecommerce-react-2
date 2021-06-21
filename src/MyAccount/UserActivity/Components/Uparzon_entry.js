import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import VerifyPhone from './VerifyPhone';
import UparzonOTP from './UparzonOTP';
import { API, ENDPOINTS } from '../../../PrimarySections/Utility/API_Links';
import axios from 'axios';
import SpinLoader from '../../../PrimarySections/SectionUtils/SpinLoader';

import { setUserAction } from '../../../Redux/Action/UserAction';

export const Uparzon_entry = (props) => {
  const [section, setSection] = useState('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [login, setLogin] = useState({
    phone: '',
    password: '',
    OTPNumber: '',
  });
  const [otp, setOtp] = useState('');
  const history = useHistory();
  const loginRequest = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError({});
    if (!login.phone) {
      setLoading(false);
      setError({ loginErrMessage: 'Provide a valid number.' });
    }
    await axios
      .post(
        `${ENDPOINTS.LOGIN}&mobile=${login.phone}&password=${login.password}`
      )
      .then((res) => {
        if (res.data.auth_token) {
          setLoading(false);
          localStorage.setItem('user_token', res.data.auth_token);
          props.setUser();
          history.push(`${props.pathRedirect}`);
        } else if (!res.data.status) {
          setLoading(false);
          setError({ loginError: res.data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const verifyRequest = async (e) => {
    setLoading(true);
    setError({});
    if (!login.OTPNumber) {
      setLoading(false);
      setError({ verifyErrMessage: 'Provide a valid number.' });
    }
    await axios
      .post(`${ENDPOINTS.VERIFY_PHONE}?mobile=${login.OTPNumber}&type=1`)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          setSection('');
        } else if (!res.data.status) {
          setLoading(false);
          setError({ verifyError: res.data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const verifyCompleteRequest = async (e) => {
    setLoading(true);
    setError({});
    if (!login.OTPNumber) {
      setLoading(false);
      setError({ verifyErrMessage: 'Provide a valid number.' });
    }
    await axios
      .post(`${ENDPOINTS.VERIFY_OTP}?mobile=${login.OTPNumber}&otp=${otp}`)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem('user_token', res.data.auth_token);
          props.setUser();
          setLoading(false);
          history.push(`${props.pathRedirect}`);
        } else if (!res.data.status) {
          setLoading(false);
          setError({ verifyError: res.data.message });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="uparzon_entry_wrapper">
      {loading && <SpinLoader />}
      <div className="container-md-fluid">
        <main className="login_main">
          <div className="row">
            <div className="col-6 d-none d-lg-block">
              <img
                src="./uparzonassets/svg/icons/user_entry/computer_user.svg"
                alt="user entry"
              />
            </div>
            <div className="uparzon_entry_form col-12 col-lg-6 col-xl-4 m-auto">
              <div className="uparzon_entry_form_child col-12 pb-5">
                <div className={`form_section_heading row no-gutters `}>
                  <Link
                    to="#"
                    className={`col-6 ${section === 'login' && 'active'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSection('login');
                    }}>
                    Log in
                  </Link>
                  <Link
                    to="#"
                    className={`col-6 ${section === 'register' && 'active'} ${
                      section === 'verified' && 'active'
                    } ${section === '' && 'active'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSection('register');
                    }}>
                    Register
                  </Link>
                </div>
                {section === 'login' ? (
                  <Login
                    loginInput={login}
                    setLogin={setLogin}
                    loginRequest={loginRequest}
                  />
                ) : section === 'register' ? (
                  <VerifyPhone
                    setSection={setSection}
                    loginInput={login}
                    setLogin={setLogin}
                    verifyRequest={verifyRequest}
                  />
                ) : section === 'verified' ? (
                  <Register />
                ) : (
                  <UparzonOTP
                    setSection={setSection}
                    number={login.OTPNumber}
                    verifyCompleteRequest={verifyCompleteRequest}
                    otp={otp}
                    setOtp={setOtp}
                  />
                )}
                {/*  */}
                {error.loginError && (
                  <div className="error-handler text-center">
                    {error.loginError}
                  </div>
                )}
                {error.verifyError && (
                  <div className="error-handler text-center">
                    {error.verifyError}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Uparzon_entry);
