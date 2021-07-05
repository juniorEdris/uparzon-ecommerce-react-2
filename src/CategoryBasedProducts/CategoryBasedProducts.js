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
  const subcategory_id = query.get('subcategory-id');
  const childcategory_id = query.get('childcatgory-id');
  useEffect(() => {
    if (id) {
      props.getProducts({ page, category_id: id });
    } else if (subcategory_id) {
      props.getProducts({ page, subcategory: subcategory_id });
    } else {
      props.getProducts({ page, childcategory: childcategory_id });
    }
    // props.setCategoryID(id);
  }, [page, id, subcategory_id, childcategory_id]);
  return (
    <div className="other_brands_wrapper">
      <AllProducts
        home={true}
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
        // category_hide={true}
        // section_title={props.products[0]?.category}
        // section_title={props.categoryName}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CategoryProducts.loading,
  products: state.CategoryProducts.categoryProducts,
  categories: state.HomeContent.categories,
  pages: state.CategoryProducts.categorypages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetCategoryBasedProd(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);
