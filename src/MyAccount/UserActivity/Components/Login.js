import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login(props) {
  const [passwordShow, setPasswordShow] = useState(false);
  const { loginInput, setLogin } = props;
  return (
    <form action="#" onSubmit={props.loginRequest}>
      <div className="uparzon_input_wrapper mt-4">
        <div className="form-group  ">
          <label htmlFor="number" className="input_label text-capitalize">
            Phone number
          </label>
          <div className="col-12 p-0 d-flex single_input align-items-center">
            <img
              src="./uparzonassets/svg/icons/user_entry/user.svg"
              alt="input icons"
            />
            <input
              type="text"
              className="form-control input"
              id="number"
              value={loginInput.number}
              onChange={(e) =>
                setLogin({ ...loginInput, phone: e.target.value })
              }
              required
              placeholder={'01XXXXXXXXX'}
            />
            {/* <div className="error-handler">{error.message}</div> */}
          </div>
        </div>
      </div>
      <div className="uparzon_input_wrapper mt-4">
        <div className="form-group ">
          <label htmlFor="password" className="input_label text-capitalize">
            Password
          </label>
          <div className="col-12 p-0 d-flex single_input align-items-center">
            <img
              src="./uparzonassets/svg/icons/user_entry/password.svg"
              alt="input icons"
            />
            <input
              type={passwordShow ? 'text' : 'password'}
              className="form-control input"
              id="password"
              value={loginInput.password}
              onChange={(e) =>
                setLogin({ ...loginInput, password: e.target.value })
              }
              placeholder={'*********'}
              required
            />
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
          {props.error.loginError && (
                  <div className="error-handler text-center">
                    <small>{props.error.loginError}</small>
                  </div>
                )}
        </div>
      </div>
      <div className="login-box mt-4 text-center">
        <button type="submit" className="btn mb-4 col-12">
          Log in
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
}

export default Login;
