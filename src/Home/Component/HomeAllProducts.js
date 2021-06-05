import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../PrimarySections/SectionUtils/ProductCard';

const HomeAllProducts = (props) => {
  return (
    <div className="section-gap-top">
      {/* <SectionHeaderThree title={'See All Products'}/> */}
      <div className="d-flex flex-wrap chilldren-gap-top">
        {props.primaryProducts?.map((product) => (
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
  primaryProducts: state.HomeContent.primaryProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAllProducts);
