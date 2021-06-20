import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddBasketProd } from '../../Redux/Action/BasketAction';
import { Truncate } from '../Utility';
import './product_card.css';

const ProductCard = (props) => {
  let compaign_price = 0;
  if (
    props.product?.campaign_category !== null &&
    props.product?.campaign_category.status === 1
  ) {
    if (props.product.campaign_category.price_in_amount) {
      compaign_price =
        Number(props.product.price) -
        Number(props.product.campaign_category.price_in_amount);
    } else if (props.product.campaign_category.price_in_percentage) {
      compaign_price =
        Number(props.product.price) -
        (Number(props.product.campaign_category.price_in_percentage) *
          Number(props.product.price)) /
          100;
    }
  }
  const addProduct = (e) => {
    // ?product_id=1009&user_id=6318&unit_price=170&total_quantity=3&is_campaign=0&api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699&shop_id=90
    e.preventDefault();
    const data = {
      product_id: props.product?.id || '',
      photo: props.product?.photo,
      name: props.product?.name,
      unit_price: compaign_price > 0 ? compaign_price : props.product?.price,
      total_quantity: 1,
      shop_id: props.product?.shop_id,
      is_campaign: compaign_price > 0 ? 1 : 0,
    };
    props.addtoCart(data);
    // console.log('===========product add from card=========================');
    // console.log(data);
    // console.log('====================================');
  };
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
              {/* <p>{Truncate(props.product?.name, 30)}</p> */}
              <p>{Truncate(props.product?.name, 70)}</p>
            </Link>
          </div>
          {compaign_price > 0 && (
            <div className="product_label">
              <span className="product_campaign_section">
                {/* {props.product?.campaign_category?.name} */}
                {props.product?.campaign_category?.price_in_percentage
                  ? props.product.campaign_category.price_in_percentage +
                    '% off'
                  : props.product.campaign_category.price_in_amount + 'tk off'}
              </span>
            </div>
          )}
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
            <div className="product_price d-flex">
              <p
                className={`${
                  compaign_price > 0 && 'campaign_old_price'
                } pr-3`}>
                &#2547; {(props.product?.price).toFixed(2)}
              </p>
              {compaign_price > 0 ? (
                <p>&#2547; {compaign_price.toFixed(2)}</p>
              ) : (
                ''
              )}
              {/* <small>
                {' '}
                <del>&#2547; {(props.product?.price).toFixed(2)}</del>
              </small> */}
            </div>
          </div>
          <div className="addTocart_btn">
            <Link to={`#`} onClick={addProduct}>
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

const mapDispatchToProps = (dispatch) => ({
  addtoCart: (data) => dispatch(AddBasketProd(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
