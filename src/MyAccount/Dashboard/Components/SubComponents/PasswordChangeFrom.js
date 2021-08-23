import React, { useState } from 'react';
import { connect } from 'react-redux';

export const PasswordChangeFrom = (props) => {
  const [oldPasswordShow, setOldPasswordShow] = useState(false);
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [conPasswordShow, setConPasswordShow] = useState(false);
  return (
    <div>

      <form onSubmit={props.submit}>
        <div className="form-row align-items-center">
          <div className="form-group col-xl-3 ">
            <label htmlFor="old_pass">Old Password</label>
          </div>
          <div className="form-group col-xl-4 input_wrapper">
            <input
              type={oldPasswordShow ? 'text' : 'password'}
              className="form-control-lg col"
              id="old_pass"
              onChange={props.handleChange}
              value={props.form.old_pass}
            />
            {/* <div
            className={`mb-1 show-password ${oldPasswordShow && 'opacity-4'}`}
            onClick={() => setOldPasswordShow(!oldPasswordShow)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 36.465 31.249">
              <path
                id="Icon_ionic-md-eye-off"
                data-name="Icon ionic-md-eye-off"
                d="M20.486,11.075A8.266,8.266,0,0,1,28.779,19.3a7.914,7.914,0,0,1-.594,3.011l4.842,4.8A19.454,19.454,0,0,0,38.715,19.3,19.638,19.638,0,0,0,13.871,8.113l3.581,3.556A8.2,8.2,0,0,1,20.486,11.075ZM3.91,6.591l3.784,3.751.765.757A19.361,19.361,0,0,0,2.25,19.3a19.667,19.667,0,0,0,25.5,10.953l.7.692,4.858,4.8,2.108-2.091L6.01,4.5Zm9.163,9.09,2.572,2.547a4.661,4.661,0,0,0-.13,1.066,4.947,4.947,0,0,0,4.972,4.931,4.676,4.676,0,0,0,1.074-.13l2.572,2.547a8.249,8.249,0,0,1-11.938-7.356A8.128,8.128,0,0,1,13.073,15.681ZM20.218,14.4l5.224,5.184.033-.26A4.947,4.947,0,0,0,20.5,14.4Z"
                transform="translate(-2.25 -4.5)"
                opacity="0.43"
              />
            </svg>
          </div> */}
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="form-group col-xl-3 ">
            <label htmlFor="new_pass">New Password</label>
          </div>
          <div className="form-group col-xl-4 input_wrapper">
            <input
              type={newPasswordShow ? 'text' : 'password'}
              className="form-control-lg col"
              id="new_pass"
              onChange={props.handleChange}
              value={props.form.new_pass}
            />
            {/* <div
            className={`mb-1 show-password ${newPasswordShow && 'opacity-4'}`}
            onClick={() => setNewPasswordShow(!newPasswordShow)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 36.465 31.249">
              <path
                id="Icon_ionic-md-eye-off"
                data-name="Icon ionic-md-eye-off"
                d="M20.486,11.075A8.266,8.266,0,0,1,28.779,19.3a7.914,7.914,0,0,1-.594,3.011l4.842,4.8A19.454,19.454,0,0,0,38.715,19.3,19.638,19.638,0,0,0,13.871,8.113l3.581,3.556A8.2,8.2,0,0,1,20.486,11.075ZM3.91,6.591l3.784,3.751.765.757A19.361,19.361,0,0,0,2.25,19.3a19.667,19.667,0,0,0,25.5,10.953l.7.692,4.858,4.8,2.108-2.091L6.01,4.5Zm9.163,9.09,2.572,2.547a4.661,4.661,0,0,0-.13,1.066,4.947,4.947,0,0,0,4.972,4.931,4.676,4.676,0,0,0,1.074-.13l2.572,2.547a8.249,8.249,0,0,1-11.938-7.356A8.128,8.128,0,0,1,13.073,15.681ZM20.218,14.4l5.224,5.184.033-.26A4.947,4.947,0,0,0,20.5,14.4Z"
                transform="translate(-2.25 -4.5)"
                opacity="0.43"
              />
            </svg>
          </div> */}
              {props.error.error && (
                <div className="text-danger">
                  <small>{props.error.error}</small>
                </div>
              )}
            {!(props.form.new_pass.length >=8) && props.error.length_error && (
              <div className="text-danger">
                <small>{props.error.length_error}</small>
              </div>
            )}
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="form-group col-xl-3 ">
            <label htmlFor="confirm_pass">Confirm Password</label>
          </div>
          <div className="form-group col-xl-4 input_wrapper">
            <input
              type={conPasswordShow ? 'text' : 'password'}
              className="form-control-lg col"
              id="confirm_pass"
              onChange={props.handleChange}
              value={props.form.confirm_pass}
            />
            {/* <span
            className={`mb-1 show-password ${conPasswordShow && 'opacity-4'}`}
            onClick={() => setConPasswordShow(!conPasswordShow)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 36.465 31.249">
              <path
                id="Icon_ionic-md-eye-off"
                data-name="Icon ionic-md-eye-off"
                d="M20.486,11.075A8.266,8.266,0,0,1,28.779,19.3a7.914,7.914,0,0,1-.594,3.011l4.842,4.8A19.454,19.454,0,0,0,38.715,19.3,19.638,19.638,0,0,0,13.871,8.113l3.581,3.556A8.2,8.2,0,0,1,20.486,11.075ZM3.91,6.591l3.784,3.751.765.757A19.361,19.361,0,0,0,2.25,19.3a19.667,19.667,0,0,0,25.5,10.953l.7.692,4.858,4.8,2.108-2.091L6.01,4.5Zm9.163,9.09,2.572,2.547a4.661,4.661,0,0,0-.13,1.066,4.947,4.947,0,0,0,4.972,4.931,4.676,4.676,0,0,0,1.074-.13l2.572,2.547a8.249,8.249,0,0,1-11.938-7.356A8.128,8.128,0,0,1,13.073,15.681ZM20.218,14.4l5.224,5.184.033-.26A4.947,4.947,0,0,0,20.5,14.4Z"
                transform="translate(-2.25 -4.5)"
                opacity="0.43"
                />
                </svg>
              </span> */}
            {props.error.error && (
              <div className="text-danger">
                  <small>{props.error.error}</small>
                </div>
              )}
          {!(props.form.confirm_pass.length >=8) && props.error.length_error && (
            <div className="text-danger">
                <small>{props.error.length_error}</small>
              </div>
            )}
          </div>
        </div>
        <div className="form-row">
            <div className="form-group col-xl-3 "></div>
          <div className="form-group col-xl-4">
            <button type="submit" className="btn btn-primary col"
            disabled={!props.form.old_pass || !props.form.new_pass || !props.form.confirm_pass}
            >
              Change Password
            </button>
          </div>
        </div>
        {/* <div className="form-row">
          <div className="form-group col-xl-3 "></div>
        <div className="form-group col-xl-4">
        {props.error.response && (
          <div className="text-danger">
                <small>{props.error.response}</small>
              </div>
            )}
        </div>
        </div> */}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeFrom);
