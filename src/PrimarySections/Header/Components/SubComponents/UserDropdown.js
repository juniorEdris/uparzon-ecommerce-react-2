import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../../Redux/Action/UserAction';

const UserDropdown = (props) => {
  return (
    <>
      {!props.user ? (
        <div className="header__option pl-1">
          <Link
            to={!props.user ? '/login' : '/dashboard'}
            className="header__link">
            <span className="header__option__lineOne header_my_account">
              <img src="./assets/svg/icons/login.svg" alt="login icon" /> Sign
              In
            </span>
            {/* <span className="lnr lnr-user"></span> */}
            {/* <span className="header__option__lineTwo">Sign In</span> */}
          </Link>
        </div>
      ) : (
        <div className="header__option pl-1">
          <Link
            to={!props.user ? '/login' : '/dashboard'}
            className="header__link">
            <span className="header__option__lineOne header_my_account">
              <img
                src="./uparzonassets/svg/icons/headerButtons/user.svg"
                alt="myaccount icon"
              />
            </span>
            {/* <img src="./assets/svg/icons/user.svg" alt="user" /> */}
          </Link>
          {/* <Link
            to="#"
            className="header__option__lineTwo header_logout"
            onClick={(e) => {
              e.preventDefault();
              props.logOut();
            }}>
            Logout
          </Link> */}
        </div>
      )}

      {/* {dropdown && (
        <div className="dropdown">
          {!props.user ? (
            <ul>
              <li>
                <Link to="/login">log in</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to={!props.user ? `/login` : `/dashboard`}>
                  dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.logOut();
                  }}>
                  log out
                </Link>
              </li>
            </ul>
          )}
        </div>
      )} */}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
