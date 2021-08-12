import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const handleChange = (e) => {
    props.setRegister({ ...props.register, [e.target.id]: e.target.value });
  };
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShowTwo, setPasswordShowTwo] = useState(false);
  return (
    <form action="#" onSubmit={props.RegisterAction}>
      <div className="form-row">
        <div className="form-group col-md-6 uparzon_input_wrapper mt-4">
          <label htmlFor="first_name">First Name</label>
          <div className="col-12 p-0 d-flex single_input align-items-center single_input">
            {/* <img src="./uparzonassets/svg/icons/user_entry/user.svg" alt="" /> */}
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={props.register.first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group col-md-6 uparzon_input_wrapper mt-4">
          <label htmlFor="last_name">Last Name</label>
          <div className="col-12 p-0 d-flex single_input align-items-center single_input">
            {/* <img src="./uparzonassets/svg/icons/user_entry/user.svg" alt="" /> */}
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={props.register.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="refer_code">Refer Code</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          {/* <img src="./uparzonassets/svg/icons/user_entry/email.svg" alt="" /> */}
          <input
            type="text"
            className="form-control"
            id="refer_code"
            placeholder="(optional)"
            value={props.register.refer_code}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="password">Password</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          <img src="./uparzonassets/svg/icons/user_entry/password.svg" alt="" />
          <input
            type={passwordShow ? 'text' : 'password'}
            className="form-control"
            id="password"
            value={props.register.password}
            onChange={handleChange}
          />{' '}
          {/* show password required */}
          {props.error.registerPassError && (
            <div className="error-handler mb-1">
              <i class="far fa-times-circle"></i>
            </div>
          )}
          <div
            className={`mb-1 show-password ${passwordShow && 'opacity-4'}`}
            onClick={() => setPasswordShow(!passwordShow)}>
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
          </div>
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="confirm_password">Confirm Password</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          <img src="./uparzonassets/svg/icons/user_entry/password.svg" alt="" />
          <input
            type={passwordShowTwo ? 'text' : 'password'}
            className="form-control"
            id="confirm_password"
            value={props.register.confirm_password}
            onChange={handleChange}
          />{' '}
          {/* show password required */}
          {props.error.registerPassError && (
            <div className="error-handler mb-1">
              <i class="far fa-times-circle"></i>
            </div>
          )}
          <div
            className={`mb-1 show-password ${passwordShowTwo && 'opacity-4'}`}
            onClick={() => setPasswordShowTwo(!passwordShowTwo)}>
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
          </div>
        </div>
        {props.error.registerPassError && (
          <div className="error-handler mt-1">
            <small>{props.error.registerPassError}</small>
          </div>
        )}
      </div>
      {props.error.registerError && (
        <div className="error-handler text-center">
          <small>
            <i class="far fa-times-circle"></i> {props.error.registerError}
          </small>
        </div>
      )}
      <div className="login-box mt-4 text-center">
        <button type="submit" className="btn mb-4 col-12">
          Register
        </button>
      </div>
      <div className="user_entry_footer_msg text-center mt-5">
        <p className="font-weight-light m-0">
          This site is protected by google{' '}
          <Link to="" className="font-weight-bold">
            privacy policy
          </Link>{' '}
          and{' '}
          <Link to="" className="font-weight-bold">
            terms and Service
          </Link>{' '}
          apply
        </p>
      </div>
    </form>
  );
};

export default Register;
