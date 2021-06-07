import { connect } from 'react-redux';
import './copyright.css';

export const CopyRight = (props) => {
  return (
    <div className="footer_bottom_wrapper">
      <div className="container-md-fluid">
        <div className="row no-gutters justify-content-between align-items-center">
          <div className="col-6">
            <span className="text-light">
              Copyright © 2021 Uparzon. All Right Reserved
            </span>
          </div>
          <div className="col-6 footer_payment">
            <img
              src="./uparzonassets/uparzonimages/payments/ssl.png"
              alt="payment media"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CopyRight);
