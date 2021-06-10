import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const HeadPhoneRow = (props) => {
  return (
    <div>
      <ProductRow
        title={
          props.products?.home_cat_products_section_1 &&
          props.products?.home_cat_products_section_1[0]?.category
        }
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/primary.png`}
        data={props.products?.home_cat_products_section_1}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeadPhoneRow);
