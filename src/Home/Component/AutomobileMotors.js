import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const AutomobileMotors = (props) => {
  let Banner = [];
  props.banners?.forEach((banner) => {
    if (banner.type === 'LeftSideFourth') {
      Banner.push(banner.photo);
    }
  });
  return (
    <div>
      <ProductRow
        title={
          props.products?.home_cat_products_section_4 &&
          props.products?.home_cat_products_section_4[0].category
        }
        imgPath={`https:${Banner[0]}`}
        // imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/primary.png`}
        data={props.products?.home_cat_products_section_4}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.allProducts,
  banners: state.HomeContent.allbanners,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AutomobileMotors);
