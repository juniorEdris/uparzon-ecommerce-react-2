import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { getCartItems } from '../Redux/Action/CartProductsAction';
import { PlaceOrderClearState } from '../Redux/Action/PlaceOrderAction';
import './ordernotify.css';

const OrderNotification = (props) => {
  useEffect(() => {
    props.getCartItems();
    toTheTop();
    setTimeout(() => {
      props.clearOrder();
    }, 10000);
    return () => {
      clearTimeout(() => {
        props.clearOrder();
      }, 10000);
    };
  }, []);
  return (
    <div className="order_notification container-md-fluid mt-5 mb-5">
      <div className="popup_wrapper col-7 ">
        <div className="popup_header">
          <div className="success_header">
            <h3 className="">Your order has been submitted!</h3>
          </div>
          <div className="popup_content">
            {props.orderNumber && (
              <p className="order_number">Order Number: #{props.orderNumber}</p>
            )}
            <p className="popup_text">
              We will call you to confirm your delivery address and the total
              price. *The total price of your order may vary depending on market
              prices of individual products, relevant discounts, and your promo
              code.
            </p>
          </div>
        </div>
        <div className="popup_footer">
          <p className="popup_grettings">
            Thank you for shopping with{' '}
            {/* <span className="order_notify_logo">Emedilife</span> */}
            <img src="./assets/images/primary/logo.png" width={70} alt="logo" />
          </p>
          <div className="back_btn">
            <Link
              to="/"
              className="btn btn-success col-8 col-md-5"
              onClick={() => props.clearOrder()}>
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderSuccess: state.PlaceOrder.place_order_msg,
  orderNumber: state.PlaceOrder.place_order_id,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
  clearOrder: () => dispatch(PlaceOrderClearState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderNotification);
