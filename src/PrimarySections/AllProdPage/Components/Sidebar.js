import Skeleton from '@yisheng90/react-loading';
import React, { useState } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      {/* <div className="sidebar_list_wrapper col mb-4">
        <h5 className="sidebar_headings">categories</h5>
        <ul className="sidebar_list not-square-option">
          {props.categories?.map((cat) => (
            <li>
              <Link to="#" onClick={(e) => e.preventDefault()}>
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div className="sidebar_list_wrapper col mb-4">
        <h5 className="sidebar_headings">price</h5>
        <input type="range" name="" id="" max="5000" min="100" />
        <InputRange
          maxValue={priceRange.max}
          minValue={priceRange.min}
          value={priceRange.max}
          onChange={() => setPriceRange(priceRange.max)}
        />
      </div> */}
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
