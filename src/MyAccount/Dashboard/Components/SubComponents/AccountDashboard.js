import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import AccountInfo from './AccountInfo';
import OrderHistory from './AccountOrderHistory';

const AccountDashboard = (props) => {
  return (
    <div className="account_dashboard">
      <div className="acc_dash_heading">
        <h5>my dashboard</h5>
      </div>
      <div className="pl-4 pr-4">
        {props.infoLoading ? (
          <div className="account_msg">
            <Skeleton height={`100px`} width={`100%`} />
          </div>
        ) : (
          <div className="account_msg">
            <img src="./assets/svg/icons/acc_qoutes.svg" alt="" />

            <p>
              Hello {props.info?.name || 'User name'}, <br />
              From your My Account Dashboard you have the ability to view a
              snapshopt of your recent account activity and update your account
              information. Select a link below to view or edit information.
            </p>
          </div>
        )}
      </div>
      {/* order history start here */}
      <OrderHistory
        loading={props.orderLoading}
        orders={props.pendingOrders}
        orderPages={props.orderPages}
        tab={props.tab}
        setTab={props.setTab}
        orderId={props.orderId}
        setOrderId={props.setOrderId}
      />
      {/* Account information start here */}
      <AccountInfo
        loading={props.infoLoading}
        info={props.info}
        setTab={props.setTab}
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
