import React from 'react';
import { connect } from 'react-redux';
import DetailsDescription from './DetailsDescription';
import DetailsHeader from './DetailsHeader';

const DetailsBody = (props) => {
  return (
    <div className="col-12 col-md-8 col-xl-9 chilldren-gap-top">
      <DetailsHeader details={props.details} />
      <DetailsDescription details={props.details} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.ProductDetails.productDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBody);
