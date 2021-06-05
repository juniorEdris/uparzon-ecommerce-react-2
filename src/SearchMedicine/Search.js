import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { useQuery } from '../PrimarySections/Utility';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
import {
  GetSearchResults,
  GetCategoryResults,
} from '../Redux/Action/SearchAction';
import './search_medicine.css';

const Search = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  // const [per_page, setPerpage] = useState(0);
  // const query = useQuery();
  // const pageNum = query.get('page');
  // const id = query.get('id');
  useEffect(() => {
    toTheTop();
  }, []);
  useEffect(() => {
    props.getProducts({ category: category });
  }, [category, page]);
  return (
    <div className="container-md-fluid mb-4">
      <div className="search_medicine_wrapper row">
        <Sidebar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <Body />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (data) => dispatch(GetSearchResults(data)),
  getCategoryProducts: (data) => dispatch(GetCategoryResults(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));
