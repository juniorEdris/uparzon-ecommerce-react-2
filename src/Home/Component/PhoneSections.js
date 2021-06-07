import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const PhoneRow = (props) => {
  return (
    <div>
      <ProductRow
        title={`Smartphone & Tablets`}
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/DyGEME3W0AAncU6.png`}
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneRow);
