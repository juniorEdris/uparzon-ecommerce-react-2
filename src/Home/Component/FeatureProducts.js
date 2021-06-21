import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../PrimarySections/SectionUtils/ProductCard';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';

const FeatureProducts = (props) => {
  const [section, setSection] = useState('feature product');

  const sections = [
    {
      name: 'feature product',
      path: '',
      id: 1,
    },
    {
      name: 'on sale',
      path: '',
      id: 2,
    },
    {
      name: 'top rated',
      path: '',
      id: 3,
    },
  ];
  return (
    <div className="container-md-fluid section-gap-top">
      <SectionHeadingOne
        sections={sections}
        morePath={'/nene'}
        section={section}
        setSection={setSection}
        LinkHide
      />
      {section === 'feature product' ? (
        <div className="d-flex flex-wrap p-0">
          {props.featureProducts?.map((product) => (
            <div className="col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2">
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
        </div>
      ) : section === 'on sale' ? (
        <div className="d-flex flex-wrap p-0">
          {props.saleProducts?.map((product) => (
            <div className="col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2">
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
        </div>
      ) : (
        section === 'top rated' && (
          <div className="d-flex flex-wrap p-0">
            {props.topProducts?.map((product) => (
              <div className="col-6 col-md-4 col-xl-2 mb-3 col-xxl-1 pr-md-2 pl-md-2">
                <ProductCard product={product} key={product.id} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  featureProducts: state.HomeContent.allProducts?.features,
  saleProducts: state.HomeContent.allProducts?.on_sales,
  topProducts: state.HomeContent.allProducts?.top_rated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureProducts);
