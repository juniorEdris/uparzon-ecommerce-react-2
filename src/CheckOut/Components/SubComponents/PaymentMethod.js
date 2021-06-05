import React from 'react';
import { connect } from 'react-redux';

const PaymentMethod = (props) => {
  const handleChange = (e) => {
    props.setType(e.target.value);
  };
  return (
    <div className="payment_method chekoutCard">
      <div className="checkout_headings">
        <h4>Payment Method</h4>
      </div>
      <div className="payment_select col-12">
        <div className="row justify-content-center select-payment">
          <div className="row no-gutters">
            <div className="form-check">
              <input
                className="form-check-input position-static check-box"
                type="radio"
                name="blankRadio"
                id="cashRadio"
                value="Cash on Delivery"
                defaultChecked
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="cashRadio">
                <img
                  src="./assets/svg/icons/cash_payment.svg"
                  className="check-box-img"
                  alt=""
                />
              </label>
            </div>
          </div>
          <div className="row no-gutters pointer_none">
            <div className="form-check">
              <input
                className="form-check-input position-static check-box"
                type="radio"
                name="blankRadio"
                id="cardRadio"
                value="card"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="cardRadio">
                <img
                  src="./assets/svg/icons/card_payment.svg"
                  className="check-box-img"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);
