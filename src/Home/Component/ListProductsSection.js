import React from 'react';
import { connect } from 'react-redux';
import ListCard from '../../PrimarySections/SectionUtils/ListCard';

const ListProductsSection = (props) => {
  return (
    <div className="section-gap-top">
      <div className="d-flex flex-wrap col-12 p-0">
        <ListCard
          data={props.products?.electronic_devices}
          title={
            props.products?.electronic_devices &&
            props.products?.electronic_devices[0]?.category
          }
          list
        />
        <ListCard
          data={props.products?.mens_fashion}
          title={
            props.products?.mens_fashion &&
            props.products?.mens_fashion[0]?.category
          }
          list
        />
        <ListCard
          data={props.products?.womens_fashion}
          title={
            props.products?.womens_fashion &&
            props.products?.womens_fashion[0]?.category
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

/*
          title={
          props.products?.electronic_devices &&
          props.products?.electronic_devices[0]?.category
        }
        data={props.products?.electronic_devices}
  products: state.HomeContent.allProducts,
*/
