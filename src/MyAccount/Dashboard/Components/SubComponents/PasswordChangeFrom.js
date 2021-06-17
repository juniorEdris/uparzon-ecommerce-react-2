import React from 'react';
import { connect } from 'react-redux';

export const PasswordChangeFrom = (props) => {
  return (
    <div>
      <form>
        <div className="form-row align-items-center">
          <div className="form-group col-xl-3 ">
            <label htmlFor="old-password">Old Password</label>
          </div>
          <div className="form-group col-xl-4">
            <input
              type="password"
              className="form-control-lg col"
              id="old-password"
            />
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="form-group col-xl-3 ">
            <label htmlFor="new-password">New Password</label>
          </div>
          <div className="form-group col-xl-4">
            <input
              type="password"
              className="form-control-lg col"
              id="new-password"
            />
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="form-group col-xl-3 ">
            <label htmlFor="confirm-password">Confirm Password</label>
          </div>
          <div className="form-group col-xl-4">
            <input
              type="password"
              className="form-control-lg col"
              id="confirm-password"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-xl-3"></div>
          <div className="form-group col-xl-4">
            <button type="submit" className="btn btn-primary col">
              Change Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeFrom);
