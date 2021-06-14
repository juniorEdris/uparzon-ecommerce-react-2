import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../../Redux/Action/UserAction';

const AccountInfo = (props) => {
  return (
    <div className="account_information col-md-6">
      <h3 className="pl-4 pr-4">
        Account Information{' '}
        <Link to="#">
          <i class="fas fa-edit"></i>
        </Link>
      </h3>
      <div className="">
        {props.loading ? (
          <div className="">
            <Skeleton width={'100%'} height={150} />
          </div>
        ) : (
          <div className="account_details">
            <div className="row no-gutters">
              <div className="col-lg-3">
                <p>name:</p>
              </div>
              <div className="col-lg-5">
                <p>{props.info?.name || 'eftekar raghib'}</p>
              </div>
            </div>
            {/* phone */}
            <div className="row no-gutters">
              <div className="col-lg-3">
                <p>phone number:</p>
              </div>
              <div className="col-lg-5">
                <p>{props.info?.name || '0180000000'}</p>
              </div>
            </div>
            {/* email */}
            <div className="row no-gutters">
              <div className="col-lg-3">
                <p>email:</p>
              </div>
              <div className="col-lg-5">
                <p className="text-lowercase">
                  {props.info?.email || 'user@mail.com'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
