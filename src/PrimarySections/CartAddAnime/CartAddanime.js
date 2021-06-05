import React from 'react';
import { connect } from 'react-redux';
import './cartanime.css';

function CartAddanime(props) {
  return (
    <div
      className={`cart_added_animation ${
        props.tabState && 'animation_active'
      }`}>
      {/* <span class="lnr lnr-checkmark-circle"></span> */}
      <h3>{props.Msg}</h3>
      {/* <span className="lnr lnr-cart" /> */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  // basketMsg: state.Basket.basketmsg,
  // tabState: state.Basket.tabStatus,
});
export default connect(mapStateToProps)(CartAddanime);
