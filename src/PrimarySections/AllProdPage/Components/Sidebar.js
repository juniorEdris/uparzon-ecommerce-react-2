import Skeleton from '@yisheng90/react-loading';
import React, { useState } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryList from '../../Category';
import {GetHomeSubCategories, GetHomeChildCategories} from '../../../Redux/Action/HomeProductsAction';

const Sidebar = (props) => {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 500,
  });
  /*=================================
    Change All to component based
  =====================================*/
  const [price, setPrice] = useState();
  const sorting = [
    // {
    //   id: 1,
    //   name: 'relevance',
    // },
    {
      id: 4,
      name: 'price low to high',
    },
    {
      id: 5,
      name: 'price high to low',
    },
    {
      id: 2,
      name: 'name a to z',
    },
    {
      id: 3,
      name: 'name z to a',
    },
  ];

  return (
    <div className="col-md-4 col-xl-3 d-none d-md-block chilldren-gap-top">
      {/* Category starts here */}
      {props.single_vendor && (
        <div className="vendor_sidebar_card text-center col mb-4">
          <div className="vendor_image mb-3">
            <img
              // src="./uparzonassets/uparzonimages/brands/demovendorimage.png"
              src={`http:${props.single_vendor.vendor_thumb}`}
              alt={`vendor`}
            />
          </div>
          <div className="vendor_name">
            <p>{props.single_vendor.vendor_name || ''}</p>
          </div>
          <div className="vendor_address">
            <p>{props.single_vendor.vendor_address || ''}</p>
          </div>
          <div
            className={`product_stars  d-flex mb-2 mt-2 align-items-center justify-content-center mb-4`}>
            {Array(5)
              .fill()
              .map((e) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.225"
                  height="16.923"
                  viewBox="0 0 18.225 16.923">
                  <path
                    id="Icon_ionic-ios-star"
                    data-name="Icon ionic-ios-star"
                    d="M19.783,9.233H13.8L11.981,3.806a.659.659,0,0,0-1.237,0L8.926,9.233H2.9a.653.653,0,0,0-.651.651.478.478,0,0,0,.012.11.625.625,0,0,0,.273.46l4.918,3.466L5.565,19.407a.653.653,0,0,0,.224.732.629.629,0,0,0,.366.159.8.8,0,0,0,.407-.146l4.8-3.421,4.8,3.421a.762.762,0,0,0,.407.146.584.584,0,0,0,.362-.159.645.645,0,0,0,.224-.732l-1.888-5.488,4.878-3.5.118-.1a.682.682,0,0,0,.212-.435A.689.689,0,0,0,19.783,9.233Z"
                    transform="translate(-2.25 -3.375)"
                    fill="#15a6b1"
                  />
                </svg>
              ))}
          </div>
          <div className="vendor_follow_btn">
            <button className="btn col-5">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.246"
                height="22.246"
                viewBox="0 0 17.246 22.246">
                <g
                  id="Icon_feather-bell"
                  data-name="Icon feather-bell"
                  transform="translate(-3.5 -2)">
                  <path
                    id="Path_21377"
                    data-name="Path 21377"
                    d="M17.205,9.075C17.205,5.72,14.93,3,12.123,3S7.041,5.72,7.041,9.075c0,7.087-2.541,9.112-2.541,9.112H19.746s-2.541-2.025-2.541-9.112"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_21378"
                    data-name="Path 21378"
                    d="M18.908,31.5a2.025,2.025,0,0,1-3.5,0"
                    transform="translate(-5.034 -9.263)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>{' '}
              follow
            </button>
          </div>
        </div>
      )}
      {/* Category starts here */}
      {/* <div className="sidebar_list_wrapper col mb-4">
        <h5 className="sidebar_headings">categories</h5>
        <ul className="sidebar_list not-square-option">
          {props.categories?.map((cat) => (
            <li key={ cat.id}>
              <Link to={`/category-products?id=${cat.id}`}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <CategoryList categories={props.categories} 
      subcategories={props.subcategories} childcategories={props.childcategories}
      getsubcategories={props.getsubcategories}
      getChildcategories={ props.getChildcategories}
      />
      {/* <div className="sidebar_list_wrapper col mb-4">
        <h5 className="sidebar_headings">price</h5>
        <input type="range" name="" id="" max="5000" min="100" />
        <InputRange
          maxValue={priceRange.max}
          minValue={priceRange.min}
          value={priceRange.max}
          onChange={() => setPriceRange(priceRange.max)}
        />
      </div> 
      <div className="sidebar_list_wrapper col mb-4 scroll-list">
        <h5 className="sidebar_headings">brand</h5>
        <ul className="sidebar_list">
          <li>
            <Link to="" className="active">
              Deef
            </Link>
          </li>
          <li>
            <Link to="">garden & kitchen </Link>
          </li>
          <li>
            <Link to="">consumer electrics </Link>
          </li>
          <li>
            <Link to="">health & beauty </Link>
          </li>
          <li>
            <Link to="">computers & technology </Link>
          </li>
          <li>
            <Link to="">jwelerry & watches </Link>
          </li>
          <li>
            <Link to="">phone & Accessories </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar_list_wrapper col mb-4 scroll-list">
        <h5 className="sidebar_headings">color</h5>
        <ul className="sidebar_list">
          <li>
            <Link to="" className="active">
              clothing & apparel{' '}
            </Link>
          </li>
          <li>
            <Link to="">garden & kitchen </Link>
          </li>
          <li>
            <Link to="">consumer electrics </Link>
          </li>
          <li>
            <Link to="">health & beauty </Link>
          </li>
          <li>
            <Link to="">computers & technology </Link>
          </li>
          <li>
            <Link to="">jwelerry & watches </Link>
          </li>
          <li>
            <Link to="">phone & Accessories </Link>
          </li>
        </ul>
      </div>*/}
    </div>
  );
};

const mapStateToProps = (state) => ({
  subcategories: state.HomeContent.subcategories,
  childcategories: state.HomeContent.childcategories,
});

const mapDispatchToProps = (dispatch) => ({
  getsubcategories: (id) => dispatch(GetHomeSubCategories(id)),
  getChildcategories: (id) => dispatch(GetHomeChildCategories(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
