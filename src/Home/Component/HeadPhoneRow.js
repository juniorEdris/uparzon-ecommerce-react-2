import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const HeadPhoneRow = (props) => {
  let Banner = [];
  props.banners?.forEach((banner) => {
    if (banner.type === 'LeftSideFirst') {
      Banner.push(banner.photo);
    }
  });
  return (
    <div>
      <ProductRow
        title={
          props.products?.home_cat_products_section_1 &&
          props.products?.home_cat_products_section_1[0]?.category
        }
        // imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/primary.png`}
        imgPath={`https://${Banner[0]}`}
        data={props.products?.home_cat_products_section_1}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadPhoneRow);
