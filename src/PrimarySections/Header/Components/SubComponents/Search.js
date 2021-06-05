import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GetSearchResults } from '../../../../Redux/Action/SearchAction';

export const Search = (props) => {
  const history = useHistory();
  useEffect(() => {
    document.body.style.overflow = props.input.length > 0 ? 'hidden' : '';
  }, [props.input]);
  const handleChange = (e) => {
    props.setInput(e.target.value);
  };

  const searchList = (e) => {
    props.setList(false);
  };
  const goToSearch = (e) => {
    e.preventDefault();
    history.push('/search-medicines');
  };

  return (
    <div className="header__search_container d-none d-md-block">
      <div className="header__search ">
        <div className="header__search_inner">
          <input
            type="text"
            list="medicines"
            className="header__searchInput"
            onKeyUp={() => props.setList(true)}
            onChange={handleChange}
            value={props.input}
            placeholder="Search medicine,injections"
          />
          {/* <div className="selectDiv">
            <select
              name=""
              id=""
              onChange={(e) => props.setOption(e.target.value)}
              value={props.option}>
              <option value="">All</option>
              {props.categories?.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.name.en}
                </option>
              ))}
            </select>
          </div> */}
          <Link
            to="#"
            className="header__searchIcon"
            onClick={props.searchProducts}>
            <i className=" fas fa-search" title="search"></i>
          </Link>
        </div>
        {props.input.length > 0 && (
          <div className="">
            {props.list && (
              <div className="">
                {props.results !== undefined ? (
                  <div className="">
                    {!props.loading ? (
                      <div className="data-list col-12 p-0">
                        {props.results.map((result) => (
                          <div className="col search_list" key={result.id}>
                            <Link
                              to={`/productdetails?id=${result.id}`}
                              onClick={(e) => {
                                searchList(e, result.id);
                                props.setInput('');
                              }}>
                              {result.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="data-list col-12">
                        <div className="header_search_list_loader">
                          loading...
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="data-list col-12">
                    <div className="header_search_list_loader">No results!</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {props.input.length > 0 && props.list && (
        <div
          className="data-list-back-drop"
          onClick={() => {
            props.setList(false);
            props.setInput('');
          }}></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Search.loading,
  results: state.Search.searchResults,
  categories: state.HomeContent.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (data) => dispatch(GetSearchResults(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
