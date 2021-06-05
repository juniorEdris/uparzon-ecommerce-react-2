import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import Skeleton from '@yisheng90/react-loading';

const Sidebar = (props) => {
  const [price, setPrice] = useState({ value: { min: 200, max: 1000 } });
  const Categories = [
    {
      id: 1,
      name: 'adult daipers',
    },
    {
      id: 2,
      name: 'covid 19',
    },
    {
      id: 3,
      name: 'energy drink',
    },
    {
      id: 4,
      name: 'eye & ear care',
    },
    {
      id: 5,
      name: 'food supliment',
    },
    {
      id: 6,
      name: 'gift pack',
    },
    {
      id: 7,
      name: 'health care accessories',
    },
    {
      id: 8,
      name: 'Herbal',
    },
    {
      id: 9,
      name: 'oral care',
    },
  ];
  const sorting = [
    {
      id: 1,
      name: 'relevance',
    },
    {
      id: 2,
      name: 'name a to z',
    },
    {
      id: 3,
      name: 'name z to a',
    },
    {
      id: 4,
      name: 'price low to high',
    },
    {
      id: 5,
      name: 'price high to low',
    },
  ];
  const reviews = [
    {
      id: 1,
      rating: 5,
    },
    {
      id: 2,
      rating: 4,
    },
    {
      id: 3,
      rating: 3,
    },
    {
      id: 4,
      rating: 2,
    },
    {
      id: 5,
      rating: 1,
    },
  ];
  return (
    <div className="search_sidebar col-12 col-md-3 d-none d-md-block">
      {' '}
      {/* order-2 order-md-1 */}
      {/* categories */}
      <div className="sidebar_categories mb-5">
        <div className="sidebar_header">
          <h5>Categories</h5>
        </div>
        <div className="sidebar_list">
          {props.loading ? (
            <ul>
              {Array(6)
                .fill()
                .map((list) => (
                  <li>
                    <Skeleton width="100%" height="30px" />
                  </li>
                ))}
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  to="#"
                  onClick={() => props.setCategory('')}
                  className={props.category === '' && 'active'}>
                  All
                </Link>
              </li>
              {props.categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to="#"
                    className={props.category === category.id && 'active'}
                    onClick={() => props.setCategory(category.id)}>
                    {category.name.en}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* sorting */}
      <div className="sidebar_sorting mb-5">
        <div className="sidebar_header">
          <h5>Sorted by</h5>
        </div>
        <div className="sidebar_list">
          <ul>
            {sorting.map((sort) => (
              <li key={sort.id}>
                <Link
                  to="#"
                  className={props.sort === sort.name && 'active'}
                  onClick={() => props.setSort(sort.name)}>
                  {sort.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* filter price */}
      {/* <div className="sidebar_price_filter mb-5">
        <div className="sidebar_header">
          <h5>Filter by price</h5>
        </div>
        <div className="price_range mb-3">
          <InputRange
            maxValue={5000}
            minValue={0}
            value={price.value}
            onChange={(value) => setPrice({ value })}
          />
        </div>
        <div className="show_pice_range row">
          <div className="min_price">
            Min <span className="show_price_range_span">{price.value.min}</span>
          </div>
          <div className="max_price">
            Max <span className="show_price_range_span">{price.value.max}</span>
          </div>
        </div>
      </div> */}
      {/* review select */}
      {/* <div className="sidebar_review_filter">
        <div className="sidebar_header">
          <h5>Review</h5>
        </div>
        <div className="sidebar_review_list">
          <ul>
            {reviews.map((rate) => (
              <li key={rate.id}>
                <Link to="#">
                  {Array(rate.rating)
                    .fill()
                    .map((_) => (
                      <span className="rating_star"> &#9733; </span>
                    ))}{' '}
                  & UP
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  categories: state.HomeContent.categories,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
