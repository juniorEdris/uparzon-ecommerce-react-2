import React from 'react';
import { connect } from 'react-redux';
import Product from '../../PrimarySections/SliderComponents/ProductSlider';

const RelatedProducts = (props) => {
  return (
    <div className="related_products">
      <h4 className="section_header">
        People Who Viewed This Item Also Viewed
      </h4>
      <Product products={props.products} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.ProductDetails.suggestions,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
