import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const HealthBeauty = (props) => {
  return (
    <div>
      <ProductRow
        title={
          props.products?.home_cat_products_section_5 &&
          props.products?.home_cat_products_section_5[0].category
        }
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/primary.png`}
        data={props.products?.home_cat_products_section_5}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthBeauty);
