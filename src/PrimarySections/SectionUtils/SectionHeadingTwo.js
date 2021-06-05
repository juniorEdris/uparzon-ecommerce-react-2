import React from 'react';
import { connect } from 'react-redux';

const SectionHeadingTwo = (props) => {
  return (
    <div className="section_header_two chilldren-gap-bottom">
      <h5 className={`${props.list && 'font-size-point7rem'} title`}>
        {props.section_title}
      </h5>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeadingTwo);
