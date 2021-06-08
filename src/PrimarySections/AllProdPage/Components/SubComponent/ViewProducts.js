import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ViewProducts = (props) => {
  return (
    <div className="view_product mb-4">
      <div className="row no-gutters align-items-center">
        <div className="col-6 d-flex align-items-center view_product_inner">
          <span className="text-light">View</span>
          <Link to="#">
            <img src="./uparzonassets/svg/icons/View Icons/01.svg" alt="" />
          </Link>
          <Link to="#">
            <img src="./uparzonassets/svg/icons/View Icons/02.svg" alt="" />
          </Link>
          <Link to="#">
            <img src="./uparzonassets/svg/icons/View Icons/03.svg" alt="" />
          </Link>
        </div>
        <div className="col-6">
          <select class="custom-select ">
            <option selected>Sort products</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
