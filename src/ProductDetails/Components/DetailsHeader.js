import React from 'react';
import { connect } from 'react-redux';
import Details from './SubComponents/Details';
import Slider from './SubComponents/Slider';

const DetailsHeader = (props) => {
  return (
    <div className="col-12 p-0">
      <div className="row ">
        <div className="col-md-5 ">
          <Slider details={props.details} />
        </div>
        <div className="col-md-7">
          <Details details={props.details} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsHeader);
