import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import OrderCancel from '../../OrderNotify/OrderCancel';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';

const OrderDetails = (props) => {
  console.log(props.order?.delivery_status,'45454');
  const history = useHistory();
  const [response, setResponse] = useState({
    loading: false,
    cancelMsg: '',
    cancelStatus: false,
  });
  const goTodash = (e) => {
    e.preventDefault();
    setResponse({ cancelStatus: false });
    // history.push('/dashboard');
    props.setTab('dashboard')
  };
  const cancelOrder = (e) => {
    e.preventDefault();
    API()
      .post(`${ENDPOINTS.CANCEL_ORDER}?order_id=${props.order_id}`)
      .then((res) => {
        console.log('remove order', res);
        setResponse({
          loading: false,
          cancelStatus: res.data.status,
          cancelMsg: res.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // response.cancelStatus && history.push('/cancel-success');
  return (
    <div className="">
      {response.cancelStatus && (
        <OrderCancel
          response={response.cancelMsg}
          setResponse={setResponse}
          close={goTodash}
        />
      )}
      <div className="order_information_details">
        {/* <div className="col-12">
        <div className="row">
          <h5 className="order_info_heading flex-grow-1">Order Details</h5>
          <Link
            to="#"
            className="btn cancel_order_btn bg-danger"
            onClick={cancelOrder}>
            {' '}
            cancel order
          </Link>
        </div>
      </div> */}
        <h5 className="order_info_heading">Order Details</h5>
        {props.loading ? (
          <div className="col-12 mt-2 ">
            <Skeleton width={'100%'} height={100} />
          </div>
        ) : (
          <div className="col-12 row justify-content-between">
            <div className="col-md-6 p-0 pr-md-3">
              <div className="list_content row justify-content-between align-items-center m-0">
                Order-ID:{props.order?.order_number}{' '}
                {props.order?.delivery_status === 'cancelled' ? (
                  ''
                ) : props.order?.delivery_status === 'on delivery' ? (
                  ''
                ) : props.order?.delivery_status === 'completed' ? (
                  ''
                ) : (
                  <Link
                    to="#"
                    className="cancel_order_btn"
                    onClick={cancelOrder}>
                    {' '}
                    cancel order
                  </Link>
                )}
              </div>
              <div className="list_content">
                Payment Method: {props.order?.method}
              </div>
              <div className="list_content">
                Payment Status: {props.order?.payment_status}
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="list_content">
                Date Added:{' '}
                {dateFormat(
                  props.order?.order_date,
                  'dddd, mmmm dS, yyyy, h:MM:ss TT'
                )}
              </div>
              <div className="list_content">
                Shipping Method: {props.order?.method}
              </div>
              <div className="list_content">
                Delivery Status: {props.order?.delivery_status}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
