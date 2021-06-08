import { connect } from 'react-redux';
import './copyright.css';

export const CopyRight = (props) => {
  return (
    <div className="">
      <div className="container-md-fluid">
        <div className="col-12 footer_payment pt-2 pb-2">
          <img
            src="./uparzonassets/uparzonimages/payments/SSLCommerce.png"
            alt="payment media"
          />
        </div>
      </div>
      <div className="footer_bottom_wrapper">
        <div className="container-md-fluid">
          <div className="col-12 text-center pt-2 pb-2">
            <span className="text-light ">
              Copyright © 2021 Uparzon. All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CopyRight);
