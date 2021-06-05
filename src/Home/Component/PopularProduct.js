import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import Product from '../../PrimarySections/SliderComponents/ProductSlider';

const PopularProduct = (props) => {

  return (
    <div className="popular_product mb-3">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width={'100%'} height={'60px'} className="mb-4" />
          <div className="row">
            {Array(6)
              .fill()
              .map((x, i) => (
                <div className="col-6 col-md-4 col-lg-2" key={i}>
                  <Skeleton width={'100%'} height={'300px'} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        props.products.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingOne
              fontStyleOne={'Popular'}
              fontStyleTwo={'Healthcare Products'}
            />
            <Product products={props.products} />
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.popularProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PopularProduct);
