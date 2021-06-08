import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../PrimarySections/SectionUtils/ProductCard';
import SectionHeadingThree from '../../PrimarySections/SectionUtils/SectionHeadingThree';

const HomeAllProducts = (props) => {
  return (
    <div className="section-gap-top">
      <SectionHeadingThree tittle={'All Products'} />
      <div className="d-flex flex-wrap chilldren-gap-top">
        {props.products?.map((product) => (
          <div className="col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.allProducts?.random_products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAllProducts);
