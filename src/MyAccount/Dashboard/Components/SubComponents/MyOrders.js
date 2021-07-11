import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Orders  from './Orders';

const MyOrders = (props) => {
  const [orderSection, setOrderSection] = useState('regular');
  return (
    <div className="">
      <div className="order_section row no-gutters">
          <Link
            to="#"
            className={`col-6 d-block text-center pt-3 pb-3 ${
              orderSection === 'regular' && 'active'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOrderSection('regular');
            }}>
            regular
          </Link>
          <Link
            to="#"
            className={`col-6 d-block text-center pt-3 pb-3 ${
              orderSection === 'campaign' && 'active'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOrderSection('campaign');
            }}>
            campaign
          </Link>
        </div>
    <div className="my_orders primary_table full_vh">
      <div className="order_header pl-4 pb-3 pt-3 pr-4 mb-3">
        <h3>Recent Orders</h3>
        </div>
        {orderSection === 'regular' ?
          <Orders loading={props.loading} orders={props.regular_orders}
          orderId={props.orderId}
            setOrderId={props.setOrderId}
            tab={props.tab}
          setTab={props.setTab}
          /> :
          <Orders loading={props.loading} orders={props.campaign_orders}
          orderId={props.orderId}
            setOrderId={props.setOrderId}
            tab={props.tab}
          setTab={props.setTab}
          />
        }
      </div>
      </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.OrderList.loading,
  completedOrders: state.OrderList.completedOrders,
  allOrders: state.OrderList.orders,
  regular_orders: state.OrderList.regular_orders,
  campaign_orders: state.OrderList.campaign_orders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(memo(MyOrders));

/*

  {props.loading ? (
        <div className="order_lists primary_table">
          <Skeleton height={350} width={'100%'} />
        </div>
      ) : props.orders?.length < 1 ? (
        <div className=" order_lists primary_table d-flex align-items-center justify-content-center null_result">
          <h3 className="">No orders yet!</h3>
        </div>
      )

*/
