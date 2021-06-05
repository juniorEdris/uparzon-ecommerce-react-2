import React from 'react';
import { connect } from 'react-redux';
import PharmacyHeader from './SubComponent/PharmacyHeader';
import PharmacyBody from './SubComponent/PharmacyBody';

export const OnlinePharma = (props) => {
  return (
    <div className="home_online_pharmacy">
      <PharmacyHeader
        loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
      />
      <PharmacyBody />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OnlinePharma);
