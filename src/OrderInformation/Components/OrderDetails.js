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
      <div className="order_information_details">
        <h5 className="order-information-heading bottom-border">Shipping Details</h5>
        {props.loading ? (
          <div className="col-12 mt-2 ">
            <Skeleton width={'100%'} height={100} />
          </div>
        ) : (
          <div className="col-12 row justify-content-between">
            <div className="col-md-6 p-0 right-border">
            <div className="list_content row  align-items-center m-0">
              <span className='list_content_head'>Name : </span> <span>John Doe</span>
              </div>
            <div className="list_content row  align-items-center m-0">
              <span className='list_content_head'>Address : </span> <span>American Streets,PO-1247,Caldorb</span>
              </div>
            </div>
            <div className="col-md-6 p-0">
            <div className="list_content row  align-items-center m-0">
              <span className='list_content_head'>Phone : </span> <span>+035 000 111 111</span>
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
