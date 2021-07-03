import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderDiv } from '../../../PrimarySections/Utility';
import { AddBasketProd } from '../../../Redux/Action/BasketAction';
import { addToWishlistAction } from '../../../Redux/Action/WishListAction';

const Details = (props) => {
  let compaign_price = 0;
  if (
    props.details?.campaign_category !== null &&
    props.details?.campaign_category &&
    props.details?.campaign_category.status === 1
  ) {
    if (props.details.campaign_category.price_in_amount) {
      compaign_price =
        Number(props.details.price) -
        Number(props.details.campaign_category.price_in_amount);
    } else if (props.details.campaign_category.price_in_percentage) {
      compaign_price =
        Number(props.details.price) -
        (Number(props.details.campaign_category.price_in_percentage) *
          Number(props.details.price)) /
          100;
    }
  }
  const [quantity, setQuantity] = useState(1);
  const addProduct = (e) => {
    const data = {
      product_id: props.details?.id || '',
      photo: props.details?.photo,
      shop_name: props.details?.shop_name || '',
      name: props.details?.name,
      unit_price: props.details?.price,
      total_quantity: quantity,
      shop_id: props.details?.shop_id,
      vendor_delivery: props.details?.vendor_delivery,
      is_campaign: compaign_price > 0 ? 1 : 0,
    };
    props.addtoCart(data);
  };
  const addProductToWish = (e) => {
    e.preventDefault()
    const data = {
      product_id: props.details?.id || '',
      photo: props.details?.photo,
      shop_name: props.details?.shop_name || '',
      name: props.details?.name,
      unit_price: props.details?.price,
      total_quantity: quantity,
      shop_id: props.details?.shop_id,
      vendor_delivery: props.details?.vendor_delivery,
      is_campaign: compaign_price > 0 ? 1 : 0,
    };
    props.addtoWish(data);
  };
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
      <div className="col-12 product_short_list" style={{ minHeight: '183px' }}>
        { renderDiv(props.details?.product_key_points)}
      </div>
      <div className="product_prices">
        {compaign_price > 0 ? (
          <span className="regular_price text-success pr-4">
            &#2547; {compaign_price}
          </span>
        ) : (
          <span className="regular_price text-success pr-4">
            &#2547; {props.details?.price}
          </span>
        )}{' '}
        {compaign_price > 0 ? (
          <small className="previous_price text-danger">
            <del>&#2547; {props.details?.price}</del>
          </small>
        ) : (
          <small className="previous_price text-danger">
            <del>&#2547; {props.details?.previous_price}</del>
          </small>
        )}
      </div>
      <div className="product_buttons d-flex mt-4">
        <div className="product_quantity">
          <span
            className="lnr lnr-circle-minus"
            onClick={() => setQuantity(quantity - 1)}></span>
          <input type="text" value={quantity} defaultValue={1} />
          <span
            className="lnr lnr-plus-circle"
            onClick={() => setQuantity(quantity + 1)}></span>
        </div>
        <button type="button" className="btn col-5" onClick={addProduct}>
          <img
            src="./uparzonassets/svg/icons/products/add-cart.svg"
            alt="add to cart icon"
          />
          add to cart
        </button>
        <div className="ml-3 d-flex align-items-center">
          <Link to='#' onClick={addProductToWish}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27.102" height="24.866" viewBox="0 0 27.102 24.866">
  <path id="Icon_material-favorite-border" data-name="Icon material-favorite-border" d="M22.649,4.5a8.115,8.115,0,0,0-6.1,2.832,8.115,8.115,0,0,0-6.1-2.832A7.381,7.381,0,0,0,3,11.953c0,5.122,4.607,9.3,11.586,15.638l1.965,1.775,1.965-1.789C25.495,21.249,30.1,17.075,30.1,11.953A7.381,7.381,0,0,0,22.649,4.5ZM16.687,25.572l-.136.136-.136-.136C9.965,19.731,5.71,15.869,5.71,11.953A4.631,4.631,0,0,1,10.453,7.21a5.3,5.3,0,0,1,4.838,3.2h2.534a5.264,5.264,0,0,1,4.824-3.2,4.631,4.631,0,0,1,4.743,4.743C27.392,15.869,23.137,19.731,16.687,25.572Z" transform="translate(-3 -4.5)" fill="#15a6b1"/>
</svg>

          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addtoCart: (data) => dispatch(AddBasketProd(data)),
  addtoWish: (data) => dispatch(addToWishlistAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
