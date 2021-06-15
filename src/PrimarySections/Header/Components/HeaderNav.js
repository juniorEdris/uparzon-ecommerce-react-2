import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavList from './SubComponents/NavList';
import NavRight from './SubComponents/NavRight';

function HeaderNav(props) {
  return (
    <div className="container-md-fluid mb-2 box-shadowOne primary-light-bg">
      <div className="header_nav">
        <NavList
          categoryBar={props.categoryBar}
          setCategoryBar={props.setCategoryBar}
        />
        <div
          className={`category_dropdown ${
            props.categoryBar ? 'd-block' : 'd-none'
          } `}>
          {' '}
          <ul
            className="d-none d-xl-block"
            onPointerLeave={() => props.setCategoryBar(false)}>
            {props.categories.map((category) => (
              <li key={category.id}>
                <Link to="#">{category.name}</Link>
              </li>
            ))}
            <li>
              <Link to="#">{'category.name'}</Link>
            </li>
          </ul>
        </div>
        <div
          className={`responsive_category_dropdown ${
            props.categoryBar ? 'd-block' : 'd-none'
          }`}>
          {' '}
          <ul className="d-xl-none">
            {props.categories.map((category) => (
              <li key={category.id}>
                <Link to="">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* {props.categoryBar && (
          <div
            className="category_dropdown_backdrop d-none d-md-block"
            onClick={(e) => props.setCategoryBar(false)}></div>
        )} */}
        <NavRight />
      </div>
    </div>
  );
}

export default connect((state) => ({
  categories: state.HomeContent.categories,
}))(HeaderNav);
