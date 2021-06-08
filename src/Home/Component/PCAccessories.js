import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../../PrimarySections/SectionUtils/ProductRow';

const PCAccessories = (props) => {
  return (
    <div>
      <ProductRow
        title={
          props.products?.health_beauty &&
          props.products?.health_beauty[0].category
        }
        imgPath={`./uparzonassets/uparzonimages/ProductSections/headings/pc_accessories_row_banner.png`}
        data={props.products?.health_beauty}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PCAccessories);
