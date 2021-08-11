import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import AccountInfo from './AccountInfo';
import OrderHistory from './AccountOrderHistory';
import OrderSummary from './OrderSummary';

const AccountDashboard = (props) => {
  return (
    <div className="account_dashboard">
      <div className="row">
        <AccountInfo loading={props.infoLoading} info={props.info} setTab={props.setTab} />
        <OrderSummary loading={props.infoLoading}/>
      </div>
      {/* order history start here */}
      <OrderHistory
        loading={props.infoLoading}
        orders={props.orders}
        orderPages={props.orderPages}
        tab={props.tab}
        setTab={props.setTab}
        orderId={props.orderId}
        setOrderId={props.setOrderId}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  infoLoading: state.UserInfo.loading,
  info: state.UserInfo.info,
  orderLoading: state.OrderList.loading,
  pendingOrders: state.OrderList.pendingOrders,
  proccessingOrders: state.OrderList.onDeliverOrders,
  completeOrders: state.OrderList.completedOrders,
  orders: state.OrderList.orders,
  orderPages: state.OrderList.order_pages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDashboard);
