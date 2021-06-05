import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
  return (
    <div>
      <Link to="#" className="header__link2 " onClick={props.handleChange}>
        <div className="header__option__basket">
          <div className="icon">
            {/* <i className=" fas fa-search" title="search"></i> */}
            <img
              src="./uparzonassets/svg/icons/headerButtons/shopping-cart.svg"
              alt="shopping cart"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
