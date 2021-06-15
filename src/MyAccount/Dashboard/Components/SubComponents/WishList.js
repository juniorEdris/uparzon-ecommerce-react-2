import React from 'react';
import { connect } from 'react-redux';

const WishList = (props) => {
  return (
    <div className="dash_wishlist_wrapper">
      <div className="order_header pl-4 pb-3 pt-3 pr-4 mb-3">
        <h3>Wishlist</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
