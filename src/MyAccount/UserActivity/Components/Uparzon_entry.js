import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import VerifyPhone from './VerifyPhone';
import UparzonOTP from './UparzonOTP';

export const Uparzon_entry = (props) => {
  const [section, setSection] = useState('login');
  return (
    <div className="uparzon_entry_wrapper">
      <div className="container-md-fluid">
        <main className="login_main">
          <div className="row">
            <div className="col-6 d-none d-lg-block">
              <img
                src="./uparzonassets/svg/icons/user_entry/computer_user.svg"
                alt="user entry"
              />
            </div>
            <div className="uparzon_entry_form col-12 col-lg-6">
              <div className="uparzon_entry_form_child col-12 pb-5">
                <div className={`form_section_heading row no-gutters `}>
                  <Link
                    to="#"
                    className={`col-6 ${section === 'login' && 'active'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSection('login');
                    }}>
                    Log in
                  </Link>
                  <Link
                    to="#"
                    className={`col-6 ${section === 'register' && 'active'} ${
                      section === 'verified' && 'active'
                    } ${section === '' && 'active'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSection('register');
                    }}>
                    Register
                  </Link>
                </div>
                {section === 'login' ? (
                  <Login />
                ) : section === 'register' ? (
                  <VerifyPhone setSection={setSection} />
                ) : section === 'verified' ? (
                  <Register />
                ) : (
                  <UparzonOTP />
                )}
                {/*  */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Uparzon_entry);
