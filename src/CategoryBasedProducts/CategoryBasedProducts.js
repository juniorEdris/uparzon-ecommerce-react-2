import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import { GetCategoryBasedProd } from '../Redux/Action/CategoryBasedProdAction';
import './categoryProducts.css';
const CategoryProducts = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const query = useQuery();
  const id = query.get('id');
  useEffect(() => {
    props.getProducts({ page, category_id: id });
    props.setCategoryID(id);
  }, [page, id]);
  return (
    <div className="other_brands_wrapper">
      <AllProducts
        home={true}
        // categories={props.categories}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
        category_hide={true}
        section_title={props.products[0]?.category}
        // section_title={props.categoryName}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CategoryProducts.loading,
  products: state.CategoryProducts.categoryProducts,
  categories: state.CategoryProducts.categoryLists,
  pages: state.CategoryProducts.categorypages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetCategoryBasedProd(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);
