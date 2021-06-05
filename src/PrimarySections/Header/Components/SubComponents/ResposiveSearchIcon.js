import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ResponsiveSearchIcon = (props) => {
  return (
    <div>
      <Link
        to="#"
        className="header__link2 d-md-none"
        onClick={props.handleChange}>
        <div className="header__option__basket">
          <div className="icon">
            <i className=" fas fa-search" title="search"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveSearchIcon);
