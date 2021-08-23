import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';

const AddressSection = (props) => {
  return (
    <div className="track_order col-12 p-0">
      <div className="row">
        {props.loading ? (
          <div className="col-12 ">
            <Skeleton width={'100%'} height={200} />
          </div>
        ) : (
            <div className="track_order_body col mb-3">
          <h5 className="order_info_heading text-center mt-4 mb-4">Track Order</h5>
              <div className="row ">
                <div className="col-features col-12 mb-4 ">
                  <div className="proccess_content col">
                    <div className="mb-2">
                    {props.order.order_status === "pending" || props.order.order_status === "on delivery" || props.order.order_status === "completed" || props.order.order_status === "delivered" || props.order.payment_status === 'Pending' ? <i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                    </div>
                    <div className="proccess_content_text">
                      <p>
                      Ordered
                      </p>
{/* 
                      <p className='mb-1'>26 April 1997</p>
                      <p>11:15 AM</p> */}

                    </div>
                  </div>
                </div>
                <div className="col-features col-12 mb-4 ">
                  <div className="proccess_content col">
                    <div className="mb-2">
                    {props.order.order_status === "pending" || props.order.order_status === "on delivery" || props.order.order_status === "completed" || props.order.order_status === "delivered" || props.order.payment_status === 'Pending' ? <i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                    </div>
                    <div className="proccess_content_text">
                      <p>
                      Payment
                      </p>

                    </div>
                  </div>
                </div>
                <div className="col-features col-12 mb-4 ">
                  <div className="proccess_content col">
                    <div className="mb-2">
                    {props.order.order_status === "pending" || props.order.order_status === "on delivery" || props.order.order_status === "completed" || props.order.order_status === "delivered" || props.order.payment_status === 'Pending' ? <i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                    </div>
                    <div className="proccess_content_text">
                      <p>
                      Proccessing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-features col-12 mb-4 ">
                  <div className="proccess_content col">
                    <div className="mb-2">
                    {props.order.order_status === "pending" || props.order.order_status === "on delivery" || props.order.order_status === "completed" || props.order.order_status === "delivered" || props.order.payment_status === 'Pending' ? <i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                    </div>
                    <div className="proccess_content_text">
                      <p>
                      Shipped
                      </p>

                    </div>
                  </div>
                </div>
                <div className="col-features col-12 mb-4 ">
                  <div className="proccess_content col">
                    <div className="mb-2">
                    {props.order.order_status === "pending" || props.order.order_status === "on delivery" || props.order.order_status === "completed" || props.order.order_status === "delivered" || props.order.payment_status === 'Pending' ? <i className="fas fa-check-circle"></i>:<i className="far fa-circle"></i>}
                    </div>
                    <div className="proccess_content_text">
                      <p>
                      Proccessed
                      </p>

                    </div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddressSection);
