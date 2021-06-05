import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import {
  getCompanySortedProducts,
  getSingleCompanyProducts,
} from '../Redux/Action/SingleBrandProductsAction';
import { getSortedProducts } from '../Redux/Reducer/SortProductsReducer';

const CompanyProducts = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const query = useQuery();
  const id = query.get('company-id');
  useEffect(() => {
    props.getProducts({ page, company_id: id, category_id: category });
  }, [page, id, category]);
  useEffect(() => {
    props.getSortingProducts({ sortingType: sort });
  }, [sort]);
  return (
    <div className="company_products_wrapper">
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
        section_title={props.products[0]?.company}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.SingleCompany.loading,
  products: state.SingleCompany.company_products,
  categories: state.SingleCompany.company_categories,
  pages: state.SingleCompany.company_pages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(getSingleCompanyProducts(data)),
  getSortingProducts: (data) => dispatch(getCompanySortedProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProducts);
