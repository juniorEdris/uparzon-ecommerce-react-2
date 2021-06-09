import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';
import './product_card.css';

const ProductCard = (props) => {
  return (
    <div className={'product_card_wrapper '}>
      {' '}
      {/*key={props.product.name} */}
      <div className="single_product_card">
        <div className="product_body">
          <div className="product_image">
            <Link to={`/productdetails?id=${props.product?.id}`}>
              <img
                src={`https:${props.product?.photo}`}
                alt={props.product?.name}
              />
              {/* <img
                src="./uparzonassets/uparzonimages/products/01.png"
                alt={''}
              /> */}
            </Link>
          </div>

          <div className="product_name">
            <Link
              to={`/productdetails?id=${props.product?.id}`}
              title={props.product?.name}>
              <p>{Truncate(props.product?.name, 30)}</p>
            </Link>
          </div>
        </div>
        <div className="product_card_footer d-flex align-items-center justify-content-between pb-0">
          <div className="product_rates_price">
            <div className="product_rating d-flex mb-2 mt-2">
              {Array(5)
                .fill()
                .map((e) => (
                  <img src="./uparzonassets/svg/icons/Icon-star.svg" alt="" />
                ))}
            </div>
            <div className="product_price">
              <p>&#2547; {(props.product?.price).toFixed(2)}</p>
            </div>
          </div>
          <div className="addTocart_btn">
            <Link to={`/productdetails?id=${props.product?.id}`}>
              <img
                src="./uparzonassets/svg/icons/cart-arrow-down.svg"
                alt="cart icons"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
