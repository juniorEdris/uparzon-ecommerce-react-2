import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const HeadPhoneRow = (props) => {
  return (
    <div>
      <ProductRow
        title={`Electronic Devices`}
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/phone_row_banner.png`}
        data={props.products[0]}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.categoryProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeadPhoneRow);
