import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const router = useHistory();
  const login = (e) => {
    router.push('/dashboard');
  };
  return (
    <form action="#" onSubmit={login}>
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
              //   value={number}
              //   onChange={(e) => setNumber(e.target.value)}
              required
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
              type="password"
              className="form-control input"
              id="password"
              //   value={number}
              //   onChange={(e) => setNumber(e.target.value)}
              required
            />
            {/* show password required */}
            {/* <div className="error-handler">{error.message}</div> */}
          </div>
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
