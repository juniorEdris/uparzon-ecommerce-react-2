import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import { GetGenericResults } from '../Redux/Action/GenericProductsAction';
import { getOtherBrands } from '../Redux/Action/OtherBrandsAction';
import './otherbrands.css';
const OtherBrands = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const query = useQuery();
  const id = query.get('id');
  useEffect(() => {
    props.getProducts({ page, id });
  }, [page, id]);
  return (
    <div className="other_brands_wrapper">
      <AllProducts
        categories={props.categories}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //   loading: state.OtherBrands.loading,
  //   products: state.OtherBrands.otherBrands,
  //   categories: state.OtherBrands.otherBrandsCat,
  //   pages: state.OtherBrands.otherBrandsPage,
  loading: state.GenericProducts.loading,
  products: state.GenericProducts.genericProducts,
  pages: state.GenericProducts.genericPages,
});

const mapDispatchToProps = (dispatch) => ({
  //   getProducts: (data) => dispatch(getOtherBrands(data)),
  getProducts: (data) => dispatch(GetGenericResults(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherBrands);
