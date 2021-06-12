import { Link } from 'react-router-dom';

function Register() {
  return (
    <form action="#">
      <div className="form-row">
        <div className="form-group col-md-6 uparzon_input_wrapper mt-4">
          <label htmlFor="first_name">First Name</label>
          <div className="col-12 p-0 d-flex single_input align-items-center single_input">
            {/* <img src="./uparzonassets/svg/icons/user_entry/user.svg" alt="" /> */}
            <input type="text" className="form-control" id="first_name" />
          </div>
        </div>
        <div className="form-group col-md-6 uparzon_input_wrapper mt-4">
          <label htmlFor="last_name">Last Name</label>
          <div className="col-12 p-0 d-flex single_input align-items-center single_input">
            {/* <img src="./uparzonassets/svg/icons/user_entry/user.svg" alt="" /> */}
            <input type="text" className="form-control" id="last_name" />
          </div>
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="refer">Refer Code</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          {/* <img src="./uparzonassets/svg/icons/user_entry/email.svg" alt="" /> */}
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="(optional)"
          />
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="email">Email</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          <img src="./uparzonassets/svg/icons/user_entry/email.svg" alt="" />
          <input type="text" className="form-control" id="email" />
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="password">Password</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          <img src="./uparzonassets/svg/icons/user_entry/password.svg" alt="" />
          <input type="password" className="form-control" id="password" />{' '}
          {/* show password required */}
        </div>
      </div>
      <div className="form-group uparzon_input_wrapper">
        <label htmlFor="confirm_password">Confirm Password</label>
        <div className="col-12 p-0 d-flex single_input align-items-center">
          <img src="./uparzonassets/svg/icons/user_entry/password.svg" alt="" />
          <input
            type="password"
            className="form-control"
            id="confirm_password"
          />{' '}
          {/* show password required */}
        </div>
      </div>
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
}

export default Register;
