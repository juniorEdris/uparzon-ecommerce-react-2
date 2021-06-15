import React, { useState } from 'react';
import { connect } from 'react-redux';
import OtpInput from 'react-otp-input';

const UparzonOTP = (props) => {
  const [otp, setOtp] = useState('');
  const handleChange = (e) => {
    setOtp(e);
  };
  return (
    <div className="uparzon_otp">
      <h3
        className="text-center verify_number_heading chilldren-gap-top"
        onClick={() => props.setSection('verified')}>
        Verify Your Number
      </h3>
      <div className="verify_number_heading_paragraph chilldren-gap-top">
        <p>Please enter your Number to receive a verification code</p>
      </div>
      <div className="uparzon_otp_wrapper col ">
        <div className="col-md-5 offset-xl-2">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            //   separator={<span>-</span>}
            inputStyle="uparzon_otp_input"
          />
        </div>
        <div className="text-center mb-5">
          <p className="otp_time">02:21</p>
          <p className="otp_number">
            OTP Has been send to 01800000000. Please enter it below
          </p>
        </div>
        <div className="login-box mt-4 col-12  text-center">
          <button
            type="button"
            className="btn mb-4 col-lg-5 col-12"
            onClick={(e) => {
              e.preventDefault();
              props.setSection('');
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
