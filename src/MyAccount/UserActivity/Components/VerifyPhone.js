import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const VerifyPhone = (props) => {
  return (
    <div className="verify_number_container">
      <h3
        className="text-center verify_number_heading chilldren-gap-top"
      >
        Verify Your Number
      </h3>
      <div className="verify_number_heading_paragraph chilldren-gap-top">
        <p>Please enter your Number to receive a verification code</p>
      </div>
      <div className="col verify_input_section">
        <div className="input-group mb-3 col-12 col-xl-8 m-auto">
          <input
            type="text"
            className="form-control verify_number_input text-center"
            aria-label="Text input with dropdown button"
            value={props.loginInput.OTPNumber}
            onChange={(e) =>
              props.setLogin({ ...props.loginInput, OTPNumber: e.target.value })
            }
            placeholder={'01XXXXXXXXX'}
          />
        </div>

        <div className="login-box mt-4 col-12  text-center">
          <button
            type="button"
            className="btn mb-4 col-lg-5 col-12"
            onClick={(e) => {
              props.verifyRequest();
            }}>
            Register
          </button>
        </div>
        <div className="text-center verify_links">
          <p>Already have an account?</p>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              props.setSection('login');
            }}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhone);
