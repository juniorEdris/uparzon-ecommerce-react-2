import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import './productDetails.css';
import { GetProductDetails } from '../Redux/Action/ProductDetailsAction';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import CartAddanime from '../PrimarySections/CartAddAnime/CartAddanime';
import BreadCrumb from '../PrimarySections/BreadCrumb';
import DetailsSidebar from './Components/DetailsSidebar';
import DetailsBody from './Components/DetailsBody';
import FeatureBrands from '../Home/Component/FeatureBrands';
import ListProductsSection from '../Home/Component/ListProductsSection';
import RelatedProducts from './Components/RelatedProducts';

const Detailsindex = (props) => {
  // get ID from query /productdetails?id=${product.id}`
  const query = useQuery();
  const prodID = query.get('id');
  useEffect(() => {
    props.getProductDetails(prodID);
    // get back to the Top
    toTheTop();
  }, [prodID]);
  return (
    <div className="product_details_container mb-4">
      <BreadCrumb />
      <div className="container-md-fluid">
        <div className="row">
          <DetailsSidebar />
          <DetailsBody />
          {/* <RelatedProducts products={props.relatedProducts} /> */}
        </div>
        <FeatureBrands />
        <ListProductsSection />
        {/* {props.basketMsg && (
          <CartAddanime Msg={props.basketMsg} tabState={props.tabState} />
        )}
        {props.wishlistMsg && (
          <CartAddanime Msg={props.wishlistMsg} tabState={props.wishState} />
        )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketMsg: state.Basket.basketmsg,
  tabState: state.Basket.tabStatus,
  wishlistMsg: state.Wishlist.wishlistMsg,
  wishState: state.Wishlist.wishlistStatus,
  details: state.ProductDetails.productDetails,
  relatedProducts: state.ProductDetails.suggestions,
});
const mapDispatchToProps = (dispatch) => ({
  getProductDetails: (id) => dispatch(GetProductDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detailsindex);
