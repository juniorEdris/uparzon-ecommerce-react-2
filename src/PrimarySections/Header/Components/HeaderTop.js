import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetSearchResults } from '../../../Redux/Action/SearchAction';
import ResponsiveFilter from '../../ResponsiveFilter.js/ResponsiveFilter';
import ResponsiveSearch from '../../ResponsiveSearch/ResponsiveSearch';
import CompareIcon from './SubComponents/CompareIcon';
import HamBurger from './SubComponents/HamBurger';
import Logo from './SubComponents/Logo';
import ProductCart from './SubComponents/ProductCart';
import ResposiveSearchIcon from './SubComponents/ResposiveSearchIcon';
import Search from './SubComponents/Search';
import UserDropdown from './SubComponents/UserDropdown';
import UserDropdownTwo from './SubComponents/UserDropdownTwo';
import WishListIcon from './SubComponents/Wishlist';
import WishListIconTwo from './SubComponents/WishListIconTwo';

export const HeaderTop = (props) => {
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);
  const [option, setOption] = useState('');
  const [input, setInput] = useState('');
  const [list, setList] = useState(false);
  const openSeacrhbox = (e) => {
    e.preventDefault();
    setSearch(!search);
    setFilter(false);
  };
  const openFilterbox = (e) => {
    e.preventDefault();
    setFilter(!filter);
    setSearch(false);
  };
  const searchProducts = (e) => {
    e.preventDefault();
    props.getSearchResults({ keywords: input, category: option });
  };
  useEffect(() => {
    props.getSearchResults({ keywords: input, category: option });
  }, [input, option]);
  return (
    <nav className="header container-md-fluid">
      {/* <HamBurger /> */}
      <Logo />
      <Search
        option={option}
        setOption={setOption}
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
        searchProducts={searchProducts}
      />
      <div className="header__right row align-items-center">
        {/* <Link
          to="#"
          className="header__mobile_searchIcon d-md-none"
          onClick={openFilterbox}>
          <img src="./assets/svg/icons/filter-list.svg" alt="" />
        </Link> */}
        <div className="header__nav">
          <CompareIcon />
          {/* <WishListIcon /> */}
          <WishListIconTwo />
          {/* <UserDropdown /> */}
          <UserDropdownTwo />
          {/* <ResposiveSearchIcon handleChange={openSeacrhbox} /> */}
          <ProductCart handleChange={openSeacrhbox} />
        </div>
      </div>
      {/* {search && (
        <ResponsiveSearch
          setSearch={setSearch}
          option={option}
          setOption={setOption}
          input={input}
          setInput={setInput}
          list={list}
          setList={setList}
          search={search}
        />
      )}
      {search && (
        <div
          className="responsive_backdrop d-md-none"
          onClick={() => {
            setList(false);
            setSearch(false);
            setInput('');
          }}></div>
      )}
      {filter && (
        <ResponsiveFilter
          option={option}
          setOption={setOption}
          filter={filter}
        />
      )}
      {filter && (
        <div
          className="responsive_backdrop d-md-none"
          onClick={() => {
            setFilter(false);
          }}></div>
      )} */}
    </nav>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (data) => dispatch(GetSearchResults(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
