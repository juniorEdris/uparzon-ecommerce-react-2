import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AllProducts from '../PrimarySections/AllProdPage/AllProducts';
import { useQuery } from '../PrimarySections/Utility';
import {
  GetGenericResults,
  getGenericSortedProducts,
} from '../Redux/Action/GenericProductsAction';

const GenericProducts = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const query = useQuery();
  const id = query.get('generic-id');
  useEffect(() => {
    props.getProducts({ page, id });
  }, [page, id]);
  // useEffect(() => {
  //   props.getSortedProducts({ sortingType: sort });
  // }, [sort]);
  return (
    <div className="generic_products_wrapper">
      <AllProducts
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
        section_title={props.products[0]?.generic && `products under`}
        section_title_bold={
          props.products[0]?.generic && `${props.products[0]?.generic} generic`
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.GenericProducts.loading,
  products: state.GenericProducts.genericProducts,
  pages: state.GenericProducts.genericPages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetGenericResults(data)),
  getSortedProducts: (data) => dispatch(getGenericSortedProducts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenericProducts);
