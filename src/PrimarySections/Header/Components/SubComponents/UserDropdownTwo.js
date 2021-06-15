import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../../Redux/Action/UserAction';

const UserDropdownTwo = (props) => {
  return (
    <div>
      <Link to="/login" className="header__link2">
        <div className="header__option__basket">
          <div className="icon">
            <img
              src="./uparzonassets/svg/icons/headerButtons/user.svg"
              alt="myaccount icon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdownTwo);
