import React from 'react';
import { connect } from 'react-redux';
import PasswordChangeFrom from './PasswordChangeFrom';

const ChangePass = (props) => {
  return (
    <div className="dash_change_password">
      <div className="order_header pl-4 pb-3 pt-3 pr-4 mb-3">
        <h3>Change Password</h3>
      </div>
      <div className="pl-lg-5 form-section">
        <PasswordChangeFrom />
        <div className="primary-page-break mt-3 mb-3"></div>
        <div className="mb-5 mt-3 col-lg-6">
          <label className="toggle" htmlFor="uniqueID">
            Multi-Factor Authentication Device:
            <input type="checkbox" className="toggle__input" id="uniqueID" />
            <span className="toggle-track">
              <span className="toggle-indicator">
                {/* 	This check mark is optional	 */}
                {/* <span className="checkMark">
                  <svg
                    viewBox="0 0 24 24"
                    id="ghq-svg-check"
                    role="presentation"
                    aria-hidden="true">
                    <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z" />
                  </svg>
                </span> */}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);
