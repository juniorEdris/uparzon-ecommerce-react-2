import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const HeadPhoneRow = (props) => {
  return (
    <div>
      <ProductRow
        title={
          props.products?.electronic_devices &&
          props.products?.electronic_devices[0]?.category
        }
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/primary.png`}
        data={props.products?.electronic_devices}
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