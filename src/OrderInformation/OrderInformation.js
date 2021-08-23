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
import Skeleton from '@yisheng90/react-loading';
import { useHistory } from 'react-router-dom';

const OrderInformation = (props) => {
  const history = useHistory();
  // console.log('single order page',props.singleorder,props.orderId)
  useEffect(() => {
    props.getSingleOrder(props.orderId);
  }, [props.orderId]);
  const generateInvoice = e=> {
    history.push(`/invoice?id=${props.orderId}`)
  }
  return (
    <div className="order_information">
      <div className="container">
        {props.loading ? (
            <div className="col-12 p-0 pt-3 mb-3">
              <Skeleton width={'100%'} height={50} />
            </div>
          )
            :
          (<div className="order-information-heading mt-0">
          {' '}
          {/*  */}
          <h5 className="">Invoice : #{props?.singleorder?.order_number}</h5>
          <p>{dateFormat(
                  props?.singleorder?.date,
                  'dddd, mmmm dS, yyyy, h:MM:ss TT'
            )}</p>
            <button type='button' className='btn btn-primary invoice_btn' onClick={generateInvoice}>Generate invoice</button>
        </div>)}
        {/* <TrackOrder loading={props.loading} order={props.singleorder} /> */}
        <OrderDetails
          loading={props.loading}
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
