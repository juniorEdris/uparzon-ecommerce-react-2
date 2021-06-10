import React from 'react';
import { connect } from 'react-redux';
import ListCard from '../../PrimarySections/SectionUtils/ListCard';

const ListProductsSection = (props) => {
  return (
    <div className="section-gap-top">
      <div className="d-flex flex-wrap col-12 p-0">
        <ListCard
          data={props.products.product_1}
          title={props.titles.title_1}
          list
        />
        <ListCard
          data={props.products.product_2}
          title={props.titles.title_2}
          list
        />
        <ListCard
          data={props.products.product_3}
          title={props.titles.title_3}
          list
        />
        {/* <ListCard title={ 'Headphones'}/> */}
        <div className={`col-lg-3 col-sm-6 list_view_section_banner`}>
          <img
            src="./uparzonassets/uparzonimages/banners/imageBanner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // loading: state.HomeContent.loading,
  // products: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProductsSection);
