import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const PCAccessories = (props) => {
  return (
    <div>
      <ProductRow
        title={`PC Accessories`}
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/pc_accessories_row_banner.png`}
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

export default connect(mapStateToProps, mapDispatchToProps)(PCAccessories);
