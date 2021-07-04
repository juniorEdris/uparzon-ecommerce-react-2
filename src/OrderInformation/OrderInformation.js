import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import { getSingleOrderDetails } from '../Redux/Action/SingleOrderAction';
import TrackOrder from './Components/TrackOrder';
import OrderDetails from './Components/OrderDetails';
import OrderProducts from './Components/OrderProducts';
import './order_information.css';
import { products } from '../data';

const OrderInformation = (props) => {
  // const query = useQuery();
  // const id = query.get('id');
  useEffect(() => {
    props.getSingleOrder(props.orderId);
  }, [props.orderId]);
  return (
    <div className="order_information">
      <div className="container">
        <div className="order-information-heading mt-0">
          {' '}
          {/*  */}
          <h5 className="">Invoice : HDJ54541722417</h5>
          <p>26 April 1997, 11:15 AM</p>
        </div>
        <TrackOrder loading={false} order={props.singleorder} />
        <OrderDetails
          loading={false}
          order={props.singleorder}
          // order_id={id}
          order_id={props.orderId}
          tab={props.tab}
          setTab={props.setTab}
        />
        <OrderProducts loading={false} order={products} />
        {/* <OrderProducts loading={false} order={props.singleorder} /> */}
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
