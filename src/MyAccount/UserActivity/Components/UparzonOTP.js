import React, { useState } from 'react';
import { connect } from 'react-redux';
import OtpInput from 'react-otp-input';

const UparzonOTP = (props) => {
  const handleChange = (e) => {
    props.setOtp(e);
  };
  return (
    <div className="uparzon_otp">
      <h3 className="text-center verify_number_heading chilldren-gap-top">
        Verify Your Number
      </h3>
      <div className="verify_number_heading_paragraph chilldren-gap-top">
        <p>Please enter your Number to receive a verification code</p>
      </div>
      <div className="uparzon_otp_wrapper col ">
        <div className="col-md-5 offset-1 offset-sm-3 offset-lg-2 offset-xl-3">
          {/* col-md-5 offset-3  */}
          <OtpInput
            value={props.otp}
            onChange={handleChange}
            numInputs={4}
            //   separator={<span>-</span>}
            inputStyle="uparzon_otp_input"
          />
        </div>
        <div className="text-center mb-5">
          <p className="otp_time">02:21</p>
          <p className="otp_number">
            OTP Has been send to {props.number || '017-0000000'}. Please enter
            it below
          </p>
        </div>
        <div className="login-box mt-4 col-12  text-center">
          <button
            type="button"
            className="btn mb-4 col-lg-5 col-12"
            onClick={(e) => {
              props.verifyCompleteRequest();
            }}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UparzonOTP);
