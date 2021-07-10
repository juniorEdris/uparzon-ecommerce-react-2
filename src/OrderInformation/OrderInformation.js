import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import { getSingleOrderDetails } from '../Redux/Action/SingleOrderAction';
import TrackOrder from './Components/TrackOrder';
import OrderDetails from './Components/OrderDetails';
import OrderProducts from './Components/OrderProducts';
import './order_information.css';
import { products } from '../data';
import dateFormat from 'dateformat';

const OrderInformation = (props) => {
  // const query = useQuery();
  // const id = query.get('id');
  console.log('single order page',props.singleorder)
  useEffect(() => {
    props.getSingleOrder(props.orderId);
  }, [props.orderId]);
  return (
    <div className="order_information">
      <div className="container">
        <div className="order-information-heading mt-0">
          {' '}
          {/*  */}
          <h5 className="">Invoice : {'HDJ54541722417'}</h5>
          <p>{dateFormat(
                  props.singleorder?.date,
                  'dddd, mmmm dS, yyyy, h:MM:ss TT'
                )}</p>
        </div>
        <TrackOrder loading={props.loading} order={props.singleorder} />
        <OrderDetails
          loading={false}
          order={props.singleorder}
          // order_id={id}
          order_id={props.orderId}
          tab={props.tab}
          setTab={props.setTab}
        />
        <OrderProducts loading={props.loading} order={props.singleorder} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.SingleOrder.loading,
  singleorder: state.SingleOrder.orderDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleOrder: (data) => dispatch(getSingleOrderDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInformation);
