import Skeleton from '@yisheng90/react-loading';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
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
    <div className="search_sidebar col-md-4 col-xl-3 d-none d-md-block">
      {' '}
      {/* categories */}
      {!props.category_hide && (
        <div className="sidebar_categories mb-5">
          <div className="sidebar_header">
            <h5>
              {props.loading ? (
                <Skeleton width="50%" height="50px" />
              ) : (
                'Categories'
              )}
            </h5>
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
                    className={props.category === '' && 'active'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.setCategory('');
                    }}>
                    All
                  </Link>
                </li>
                {props.categories?.map((category) => (
                  <li key={category.id}>
                    <Link
                      to="#"
                      className={props.category === category.id && 'active'}
                      onClick={(e) => {
                        e.preventDefault();
                        props.setCategory(category.id);
                      }}>
                      {props.home ? category.name.en : category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
      {/* sorting */}
      <div className="sidebar_sorting mb-5">
        <div className="sidebar_header">
          <h5>
            {props.loading ? (
              <Skeleton width="50%" height="50px" />
            ) : (
              'Sorted by'
            )}
          </h5>
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
              {sorting.map((sort) => (
                <li key={sort.id}>
                  <Link
                    to="#"
                    className={props.sort === sort.name && 'active'}
                    onClick={(e) => {
                      e.preventDefault();
                      props.setSort(sort.name);
                    }}>
                    {sort.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
