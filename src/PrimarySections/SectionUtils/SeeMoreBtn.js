import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SeeMoreBtn = (props) => {
  return (
    <div className="">
      <Link to="/more-medicines" className="btn-more" type="button">
        see more
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SeeMoreBtn);
