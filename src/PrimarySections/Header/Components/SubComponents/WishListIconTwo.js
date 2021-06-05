import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WishListIconTwo = (props) => {
  return (
    <div>
      <Link to="#" className="header__link2" onClick={props.handleChange}>
        <div className="header__option__basket">
          <div className="icon">
            <img
              src="./uparzonassets/svg/icons/headerButtons/wishlist.svg"
              alt="myaccount icon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WishListIconTwo);
