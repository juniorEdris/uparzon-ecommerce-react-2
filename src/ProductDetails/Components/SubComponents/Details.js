import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = (props) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product_slider_details">
      <div className="product_details_name">
        <p>{props.details?.name}</p>
      </div>
      <div
        className={`product_brand_name_sku d-flex align-items-center flex-wrap no-gutters chilldren-gap-bottom`}>
        <div className={`product_brand_name  `}>
          <span className={`brand_tag`}>brand: </span>
          <span className={`brand_name`}>
            <Link to={`/single-brand?brand_id=${props.details?.shop_id}`}>
              {props.details?.shop_name}
            </Link>
          </span>
        </div>
        <div className={`product_sku `}>
          <span className={`sku_tag`}>SKU: </span>
          <span className={`sku_id`}>{props.details?.sku}</span>
        </div>
      </div>
      <div
        className={`product_ratings d-flex align-items-center flex-wrap no-gutters chilldren-gap-bottom`}>
        <div className={`product_stars  d-flex mb-2 mt-2`}>
          {Array(5)
            .fill()
            .map((e) => (
              <img src="./uparzonassets/svg/icons/Icon-star.svg" alt="" />
            ))}
        </div>
        <div className={`product_reviews_count`}>
          <small>(3 customer reviews)</small>
        </div>
      </div>
      {props.details?.stock && (
        <div className="col-12 product_stock p-0">
          avaibility:
          <span className="text-success">in stock({props.details?.stock})</span>
        </div>
      )}
      {/* section break */}
      <div className="border-break w-100 pt-3 pb-3"></div>
      <div className="col-12 product_short_list">
        <ul>
          <li>Unrestrained and portable active stereo speaker</li>
          <li>Free from the confines of wires and chords</li>
          <li>20 hours of portable capabilities</li>
          <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
          <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
        </ul>
      </div>
      <div className="product_prices">
        <span className="regular_price text-success pr-4">
          &#2547; {props.details?.price}
        </span>{' '}
        <small className="previous_price text-danger">
          <del>&#2547; {props.details?.previous_price}</del>
        </small>
      </div>
      <div className="product_buttons d-flex mt-4">
        <div className="product_quantity">
          <span
            className="lnr lnr-circle-minus"
            onClick={() => setQuantity(quantity - 1)}></span>
          <input type="text" value={quantity} defaultValue={0} />
          <span
            className="lnr lnr-plus-circle"
            onClick={() => setQuantity(quantity + 1)}></span>
        </div>
        <button type="button" className="btn col-5">
          <img
            src="./uparzonassets/svg/icons/products/add-cart.svg"
            alt="add to cart icon"
          />
          add to cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
