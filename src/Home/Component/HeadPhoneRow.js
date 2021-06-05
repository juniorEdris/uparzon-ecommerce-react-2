import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const HeadPhoneRow = (props) => {
  return (
    <div>
      <ProductRow
        title={`Headphones`}
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/phone_row_banner.png`}
        data={props.primaryProducts}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  primaryProducts: state.HomeContent.primaryProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeadPhoneRow);
