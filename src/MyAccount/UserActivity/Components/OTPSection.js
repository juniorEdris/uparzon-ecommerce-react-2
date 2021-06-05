import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './otpsection.css';

const OTPSection = (props) => {
  const [OTP, setOTP] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="">
      <div className="otp_section_wrapper pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <main id="primary" className="site-main">
                <div className="user-login otp-login">
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6">
                      <div className="otp-form">
                        <div className="otp_close_box" onClick={props.close}>
                          &times;
                        </div>
                        <div className="user_entry_heading"></div>
                        <div className="mb-3 mt-3">
                          <div className="col-12 text-center text-danger">
                            <p className="">
                              we just sent you an SMS with an OTP code
                            </p>
                          </div>
                          <div className="col-12 text-center">
                            <p className="">
                              To complete your phone number login please enter
                              4-digit OTP code below
                            </p>
                          </div>
                        </div>
                        <form action="#" onSubmit={props.login}>
                          <div className="form-group row align-items-center mb-5">
                            <div className="col-12 col-sm-12 col-md-8 offset-md-2 offset-xl-2">
                              <input
                                type="text"
                                className="form-control input"
                                id="otp"
                                placeholder="Enter your OTP"
                                value={props.otp}
                                onChange={(e) => props.setOtp(e.target.value)}
                                required
                              />
                              {props.serverResponse.otp && (
                                <div className="text-success otp_msg">
                                  <small>{props.serverResponse.otp}</small>
                                </div>
                              )}
                              <div className="otp_resend text-center mt-3">
                                <Link
                                  to="#"
                                  onClick={props.resendOtp}
                                  className=" text-capitalize">
                                  RESEND OTP request
                                </Link>{' '}
                              </div>
                              {props.serverResponse.loginErrMessage && (
                                <div className="error-handler text-center">
                                  {props.serverResponse.loginErrMessage}
                                </div>
                              )}
                              {props.serverResponse.otpErrMessage && (
                                <div className="error-handler text-center">
                                  <small>
                                    {props.serverResponse.otpErrMessage}
                                  </small>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="login-box mt-4 text-center">
                            <button
                              type="submit"
                              className="btn mb-4 col-12 col-sm-12 col-md-7">
                              Continue
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                {/* end of user-login */}
              </main>{' '}
              {/* end of #primary */}
            </div>
          </div>{' '}
          {/* end of row */}
        </div>{' '}
      </div>
      <div className="otp-enrty-backdrop" onClick={props.close}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OTPSection);
