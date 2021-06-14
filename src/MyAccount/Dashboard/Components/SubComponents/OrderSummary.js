import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircleProgress } from 'react-gradient-progress';

const OrderSummary = (props) => {
  return (
    <div className="order_summary col-md-6">
      <h3 className="pl-4 pr-4">Order Summary </h3>
      <div className="order_details row no-gutters">
        <div className="col-xl-6 text-center">
          <div className="text-center">
            <span>Total Orders</span>
          </div>
          <CircleProgress
            percentage={75}
            strokeWidth={8}
            primaryColor={['#13A7B1', '#13A7B1']}
            secondaryColor={'#D3D3D3'}
          />
        </div>
        <div className="col-xl-6 text-center">
          <div className="text-center">
            <span>Pending Orders</span>
          </div>
          <CircleProgress
            percentage={65}
            strokeWidth={8}
            primaryColor={['#13A7B1', '#13A7B1']}
            secondaryColor={'#D3D3D3'}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
