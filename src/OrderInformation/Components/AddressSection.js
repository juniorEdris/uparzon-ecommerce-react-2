import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';

const AddressSection = (props) => {
  return (
    <div className="address_section col-12 p-0">
      <div className="row">
        {props.loading ? (
          <div className="col-md-6 payment_address">
            <h5 className="order_info_heading">Payment Address</h5>
            <Skeleton width={'100%'} height={200} />
          </div>
        ) : (
          <div className="col-md-6 payment_address">
            <h5 className="order_info_heading">Payment Address</h5>
            <div className="list_content">
              {props.order?.customer_name || 'N/A'}
            </div>
            <div className="list_content">{props.order?.area || 'N/A'}</div>
            <div className="list_content">{props.order?.district || 'N/A'}</div>
            {/* <div className="list_content">{props.order?.bull || ''}</div> */}
            <div className="list_content">
              {props.order?.customer_address || 'N/A'}
            </div>
          </div>
        )}
        {props.loading ? (
          <div className="col-md-6 shipping_address">
            <h5 className="order_info_heading">Shipping Address</h5>
            <Skeleton width={'100%'} height={200} />
          </div>
        ) : (
          <div className="col-md-6 shipping_address">
            <h5 className="order_info_heading">Shipping Address</h5>
            <div className="list_content">
              {props.order?.customer_name || 'N/A'}
            </div>
            <div className="list_content">{props.order?.area || 'N/A'}</div>
            <div className="list_content">{props.order?.district || 'N/A'}</div>
            {/* <div className="list_content">{props.order?.bull || ''}</div> */}
            <div className="list_content">
              {props.order?.customer_address || 'N/A'}
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
