import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryList from '../../PrimarySections/Category';
import ListCard from '../../PrimarySections/SectionUtils/ListCard';

const DetailsSidebar = (props) => {
  return (
    <div className="col-md-4 col-xl-3 d-none d-md-block chilldren-gap-top">
      <CategoryList categories={props.categories} />
      <div className="col=12">
        <img
          src="./uparzonassets/uparzonimages/banners/productdetails/banner-1.png"
          alt="details ad"
        />
      </div>
      <div className="col-12 chilldren-gap-top chilldren-gap-bottom p-0">
        <ListCard
          fullWidth
          list
          details
          data={props.products?.islamic_conner}
          title={
            props.products?.islamic_conner &&
            props.products?.islamic_conner[0]?.category
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.HomeContent.categories,
  products: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsSidebar);
