import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  GetHomeChildCategories,
  GetHomeSubCategories,
} from '../../../Redux/Action/HomeProductsAction';
import NavList from './SubComponents/NavList';
import NavRight from './SubComponents/NavRight';

function HeaderNav(props) {
  const allCategory = (e) => {
    e.preventDefault();
    props.setCategoryBar(!props.categoryBar);
  };
  return (
    <div className="container-md-fluid mb-2 box-shadowOne primary-light-bg">
      <div className="header_nav">
        <Link to="#" className="all_category nav-all " onClick={allCategory}>
          all categories <span class="ml-1 lnr lnr-menu"></span>
        </Link>
        <NavList
          categoryBar={props.categoryBar}
          setCategoryBar={props.setCategoryBar}
        />
        <div
          className={`category_dropdown ${
            props.categoryBar ? 'd-block' : 'd-none'
          }`}>
          {' '}
          <ul className="" onPointerLeave={() => props.setCategoryBar(false)}>
            {props.categories.map((category) => (
              <li
                key={category.id}
                className={`${category.has_subcategory && 'has_section'}`}>
                <Link
                  to={`/category-products?id=${category.id}`}
                  onMouseOver={() => props.getsubcategories(category.id)}>
                  {category.name}
                </Link>
                {props.subcategories && (
                  <ul className="sub_category">
                    {props.subcategories.map((subcat) => (
                      <li
                        key={subcat.id}
                        className={`${
                          subcat.has_childcategory && 'has_section'
                        }`}>
                        <Link
                          to={`/category-products?subcategory-id=${subcat.id}`}
                          onMouseOver={() =>
                            props.getChildcategories(subcat.id)
                          }>
                          {subcat.name}
                        </Link>
                        {props.childcategories && (
                          <ul className="child_category">
                            {props.childcategories.map((childcat) => (
                              <li key={childcat.id}>
                                <Link
                                  to={`/category-products?childcategory-id=${childcat.id}`}
                                  >
                                  {childcat.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* <div 
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
        </div> */}
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
const mapStateToProps = (state) => ({
  categories: state.HomeContent.categories,
  subcategories: state.HomeContent.subcategories,
  childcategories: state.HomeContent.childcategories,
});
const mapDispatchToProps = (dispatch) => ({
  getsubcategories: (id) => dispatch(GetHomeSubCategories(id)),
  getChildcategories: (id) => dispatch(GetHomeChildCategories(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
