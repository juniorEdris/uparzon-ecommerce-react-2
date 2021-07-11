import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import OrderCancel from '../../OrderNotify/OrderCancel';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';

const OrderDetails = (props) => {
  const [response, setResponse] = useState({
    loading: false,
    cancelMsg: '',
    cancelStatus: false,
  });
  const goTodash = (e) => {
    e.preventDefault();
    setResponse({ cancelStatus: false });
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
  /*
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
              {dateFormat(
                  props.order?.order_date,
                  'dddd, mmmm dS, yyyy, h:MM:ss TT'
                )}
  */ 
  return (
    <div className="">
      {response.cancelStatus && (
        <OrderCancel
          response={response.cancelMsg}
          setResponse={setResponse}
          close={goTodash}
        />
      )}
      {props.loading ? (
          <div className="col-12 mt-2 ">
            <Skeleton width={'100%'} height={165} />
        </div>
      ) : (
      <div className="order_information_details">
        <h5 className="order-information-heading bottom-border">Shipping Details</h5>
        
          <div className="col-12 row justify-content-between">
            <div className="col-md-6 p-0 right-border">
            <div className="list_content row  align-items-center m-0">
              <span className='list_content_head'>Name : </span> <span>{props.order?.shipping_name}</span>
              </div>
            <div className="list_content row  align-items-center m-0">
              <span className='list_content_head'>Address : </span> <span>{props.order?.shipping_address || 'none'}</span>
              </div>
            </div>
            <div className="col-md-6 p-0">
            <div className="list_content row  align-items-center m-0">
              <span className='list_content_head'>Phone : </span> <span>{props.order?.shipping_phone}</span>
              </div>
            </div>
          </div>
      </div>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(memo(OrderDetails));
