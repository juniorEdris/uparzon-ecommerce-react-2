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
  const id = query.get('brand_id');
  useEffect(() => {
    props.getProducts({ page, shop_id: id, category_id: category });
  }, [page, id, category]);
  useEffect(() => {
    props.getSortingProducts({ sortingType: sort });
  }, [sort]);
  const vendor = {
    vendor_name: props.products && props.products[0]?.shop_name,
    vendor_photo: props.products && props.products[0]?.thumbnail,
    vendor_thumb: props.products && props.products[0]?.thumbnail,
    vendor_address: props.products && props.products[0]?.shop_address,
  };
  return (
    <div className="company_products_wrapper">
      <AllProducts
        single_vendor={vendor}
        categories={props.categories}
        // category={category}
        // setCategory={setCategory}
        // sort={sort}
        // setSort={setSort}
        page={page} //page is active
        // setPage={setPage}
        loading={props.loading}
        products={props.products}
        // pages={props.pages}
        // section_title={props.products[0]?.company}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.SingleCompany.loading,
  products: state.SingleCompany.company_products,
  categories: state.HomeContent.categories,

  pages: state.SingleCompany.company_pages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(getSingleCompanyProducts(data)),
  getSortingProducts: (data) => dispatch(getCompanySortedProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProducts);
