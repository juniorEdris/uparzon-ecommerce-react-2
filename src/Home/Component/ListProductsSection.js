import React from 'react';
import { connect } from 'react-redux';
import ListCard from '../../PrimarySections/SectionUtils/ListCard';

const ListProductsSection = (props) => {
  return (
    <div className="section-gap-top">
      <div className="d-flex flex-wrap col-12 p-0">
        <ListCard
          data={props.products?.babies_and_toys}
          title={
            props.products?.babies_and_toys &&
            props.products?.babies_and_toys[0]?.category
          }
          list
        />
        <ListCard
          data={props.products?.office_stationary}
          title={
            props.products?.office_stationary &&
            props.products?.office_stationary[0]?.category
          }
          list
        />
        <ListCard
          data={props.products?.islamic_conner}
          title={
            props.products?.islamic_conner &&
            props.products?.islamic_conner[0]?.category
          }
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
  loading: state.HomeContent.loading,
  products: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProductsSection);
