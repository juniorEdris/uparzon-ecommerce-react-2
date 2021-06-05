import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { getCartItems } from '../Redux/Action/CartProductsAction';
import { PlaceOrderClearState } from '../Redux/Action/PlaceOrderAction';
import './ordernotify.css';

const OrderCancel = (props) => {
  return (
    <div className="">
      <div className="cancel_order_popup">
        <div className="row no-gutters justify-content-center">
          <div className="popup_wrapper col-7 ">
            <div className="close_box" onClick={props.close}>
              &times;
            </div>
            <div className="popup_header">
              <div className="success_header">
                <h3 className="text-capitalize">{props.response}</h3>
              </div>
            </div>
            <div className="popup_footer">
              {/* <img
                    src="./assets/images/primary/logo.png"
                    width={70}
                    alt="logo"
                  /> */}
              <div className="back_btn">
                <Link
                  to="#"
                  onClick={props.close}
                  className="btn btn-success col-8 col-md-5 mt-3">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cancel_order_backdrop" onClick={props.close}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OrderCancel);
