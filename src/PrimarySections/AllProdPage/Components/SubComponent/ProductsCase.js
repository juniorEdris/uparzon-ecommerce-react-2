import Skeleton from '@yisheng90/react-loading';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '../../../Pagination/Pagination';
import NoProducts from '../../../SectionUtils/NoProducts';
import ProductCard from '../../../SectionUtils/ProductCard';

const SearchProducts = (props) => {
  return (
    <div className="search_body_products">
      {props.products !== undefined && props.products.length > 0 ? (
        <div className="row">
          {props.loading
            ? Array(20)
                .fill()
                .map((s, i) => (
                  <div className="col-6 col-lg-4 col-xl-3 mb-1 col-xxl-2">
                    <Skeleton width="100%" height={354} />
                  </div>
                ))
            : props.products?.map((product) => (
                <div
                  className="col-6 col-lg-4 col-xl-3 col-xxl-2"
                  key={product.id}>
                  {' '}
                  {/* col-md-2 col-md-4 */}
                  <ProductCard product={product} key={product.id} />
                </div>
              ))}
        </div>
      ) : (
        <div className=" row">
          {props.loading ? (
            Array(20)
              .fill()
              .map((s, i) => (
                <div className="col-6 col-lg-4 col-xl-3 mb-1">
                  <Skeleton width="100%" height={354} />
                </div>
              ))
          ) : (
            <div className="w-100">
              <NoProducts />
            </div>
          )}
        </div>
      )}
      {props.pages?.links?.length > 0 && (
        <Pagination
          page={props.page}
          pages={props.pages}
          setPage={props.setPage}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
