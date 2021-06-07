import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SectionHeadingTwo = (props) => {
  return (
    <div className="section_header_two chilldren-gap-bottom d-flex justify-content-between align-items-end">
      <h5 className={`${props.list && 'font-size-point7rem'} title`}>
        {props.section_title}
      </h5>
      {props.list ? (
        ''
      ) : (
        <Link
          to={props.morePath}
          className="text-capitalize all-products-btn float_right">
          all categories
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeadingTwo);
