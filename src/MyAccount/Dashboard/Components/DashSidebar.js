import React from 'react';
import { connect } from 'react-redux';
import AccountNav from './AccountNav';

const DashSidebar = (props) => {
  return (
    <div className="dashSidebar">
      <AccountNav tab={props.tab} setTab={props.setTab} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashSidebar);
