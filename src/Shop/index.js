import React, { useState } from 'react';
import { connect } from 'react-redux';
import { products } from '../data';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import BreadCrumb from '../PrimarySections/BreadCrumb';

const Shop = (props) => {
  const [category, setCategory] = useState('');
  const [page, setPage] = useState('');

  return (
    <div className="shop_wrapper">
      <BreadCrumb />
      <AllProducts
        categories={props.categories}
        products={props.allProducts?.features}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  // loading:state.ShopContents.loading,
  // loading:state.ShopContents.products,
  categories: state.HomeContent.categories,
  allProducts: state.HomeContent.allProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
