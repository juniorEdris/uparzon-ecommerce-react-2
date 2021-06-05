import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../PrimarySections/SectionUtils/ProductCard';

const FeatureProducts = (props) => {
  return (
    <div className="container-md-fluid section-gap-top">
      <div className="d-flex flex-wrap p-0">
        {props.primaryProducts?.map((product) => (
          <div className="col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2">
            <ProductCard product={product} key={product.id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureProducts);
