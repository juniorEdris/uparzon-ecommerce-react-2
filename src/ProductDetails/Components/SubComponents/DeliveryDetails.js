import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DeliveryDetails = (props) => {
  return (
    <div className="delivery_details">

        {props.loading ? (
          <div className=" row">
            <Skeleton width={'100%'} height={100} />
          </div>
        ) : (
          <div className="head row">
            <h4>Delivery Option</h4>
            <img className="icon" src={`./assets/svg/icons/info.svg`} alt="" />
          </div>
        )}
      {props.loading ? (
        <div className="body row">
          <Skeleton width={'100%'} height={100} />
        </div>
      ) : (
        <div className="body row">
          <img
            className="icon"
            src={`./assets/svg/icons/location.svg`}
            alt={'edit'}
          />
          <p className="delivery_address">
            RF Zohura Tower, Chittagong Computer Market (Ground floor), SK Mojib
            Road, Agrabad, Chowmuhani
          </p>
        </div>
      )}

      {props.loading ? (
        <div className="details_footer">
          <Skeleton width={'100%'} height={150} />
        </div>
      ) : (
        <div className="details_footer">
          <h4>Return and Warrenty Policy</h4>
          <ul>
            <li>
              <img
                className="footer_icon icon"
                src={`./assets/svg/icons/checkmark-1.svg`}
                alt={'100% authentic'}
              />
              100% authentic
            </li>
            <li>
              <img
                className="footer_icon icon"
                src={`./assets/svg/icons/checkmark-1.svg`}
                alt={'14 days Easy Return'}
              />
              14 days Easy Return
            </li>
            <li>
              <img
                className="footer_icon icon"
                src={`./assets/svg/icons/map-sheild.svg`}
                alt={'Warrenty not available'}
              />
              Warrenty not available
            </li>
          </ul>
        </div>
      )}
      {props.loading ? (
        <div className="other_brands_btn">
          <Skeleton width={'100%'} height={50} />
        </div>
      ) : (
        <div className="other_brands_btn">
          <Link
            to={`/otherbrands?id=${props.details?.generic_id}`}
            className="btn col-7">
            other brands
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);
