import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const PhoneRow = (props) => {
  return (
    <div>
      <ProductRow
        title={`Smartphone & Tablets`}
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/DyGEME3W0AAncU6.png`}
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneRow);
