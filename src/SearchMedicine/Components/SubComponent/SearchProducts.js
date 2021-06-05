import Skeleton from '@yisheng90/react-loading';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '../../../PrimarySections/Pagination/Pagination';
import NoProducts from '../../../PrimarySections/SectionUtils/NoProducts';
import ProductCard from '../../../PrimarySections/SectionUtils/ProductCard';
import {
  GetCategoryResults,
  GetSearchResults,
} from '../../../Redux/Action/SearchAction';

const SearchProducts = (props) => {
  const [page, setpage] = useState(1);
  useEffect(() => {
    props.getCategoryProducts({ page });
  }, [page]);

  return (
    <div className="search_body_products">
      {props.products !== undefined ? (
        <div className="row">
          {props.loading
            ? Array(4)
                .fill()
                .map((s, i) => (
                  <div className="col-6 col-md-4 col-lg-3">
                    <Skeleton width="100%" height={354} />
                  </div>
                ))
            : props.products?.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                  <ProductCard product={product} key={product.id} />
                </div>
              ))}
        </div>
      ) : (
        <NoProducts />
      )}
      {props.pages?.links?.length > 0 && (
        <Pagination page={page} pages={props.pages} setPage={setpage} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Search.loading,
  products: state.Search.searchResults,
  pages: state.Search.search_pages,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetSearchResults(data)),
  getCategoryProducts: (data) => dispatch(GetCategoryResults(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
