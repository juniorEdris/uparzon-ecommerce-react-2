import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../../PrimarySections/SectionUtils/ProductCard';

const NecessaryProducts = (props) => {
  return (
    <div className="">
      <div className="row">
        {props.products?.map((product) => (
          <div className="col-6 col-md-4 col-xl-2" key={product.id}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.neccessaryProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NecessaryProducts);
