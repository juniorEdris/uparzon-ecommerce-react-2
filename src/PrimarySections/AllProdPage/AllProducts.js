import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../SectionUtils/WindowTop';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
import './all_products.css';

const AllProducts = (props) => {
  useEffect(() => {
    toTheTop();
  }, [props.page]);
  return (
    <div className="container-md-fluid mb-4">
      <div className="search_medicine_wrapper row">
        <Sidebar
          home={props.home}
          loading={props.loading}
          categories={props.categories}
          category={props.category}
          setCategory={props.setCategory}
          sort={props.sort}
          setSort={props.setSort}
          category_hide={props.category_hide}
        />
        <Body
          page={props.page}
          setPage={props.setPage}
          loading={props.loading}
          products={props.products}
          pages={props.pages}
          section_title={props.section_title}
          section_title_bold={props.section_title_bold}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AllProducts));
