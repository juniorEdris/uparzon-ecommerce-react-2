import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const PCAccessories = (props) => {
  return (
    <div>
      <ProductRow
        title={`Women's Fashion`}
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/pc_accessories_row_banner.png`}
        data={props.products[2]}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.categoryProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PCAccessories);
