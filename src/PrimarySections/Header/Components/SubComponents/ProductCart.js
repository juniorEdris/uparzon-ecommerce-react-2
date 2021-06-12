import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const openDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };
  return (
    <div>
      <Link to="#" className="header__link2 " onClick={openDropdown}>
        <div className="header__option__basket dropdown_parent">
          <div className="icon">
            {/* <i className=" fas fa-search" title="search"></i> */}
            <img
              src="./uparzonassets/svg/icons/headerButtons/shopping-cart.svg"
              alt="shopping cart"
            />
          </div>
        </div>
      </Link>
      <div className={`${dropdown ? 'd-block' : 'd-none'} dropdown`}>
        <ul>
          <li>user 1</li>
          <li>user 2</li>
          <li>user 3</li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
