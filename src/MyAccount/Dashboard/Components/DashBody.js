import React from 'react';
import { connect } from 'react-redux';
import OrderInformation from '../../../OrderInformation/OrderInformation';
import AccountDashboard from './SubComponents/AccountDashboard';
import EditInformation from './SubComponents/EditInformation';
import MyOrders from './SubComponents/MyOrders';

const DashBody = (props) => {
  return (
    <div className="dashboard_body">
      {props.tab === 'dashboard' && (
        <AccountDashboard
          tab={props.tab}
          setTab={props.setTab}
          orderId={props.orderId}
          setOrderId={props.setOrderId}
        />
      )}
      {props.tab === 'account' && <EditInformation />}
      {props.tab === 'order' && (
        <MyOrders
          tab={props.tab}
          setTab={props.setTab}
          orderId={props.orderId}
          setOrderId={props.setOrderId}
        />
      )}
      {props.tab === 'orderInfo' && (
        <OrderInformation
          orderId={props.orderId}
          setOrderId={props.setOrderId}
          tab={props.tab}
          setTab={props.setTab}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashBody);
