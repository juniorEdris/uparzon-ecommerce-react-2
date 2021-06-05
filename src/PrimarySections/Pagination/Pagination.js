import React from 'react';
import { connect } from 'react-redux';
import './pagination.css';

const Pagination = (props) => {
  return (
    <div className="pagination mt-3">
      <ul className="row no-gutters align-items-center">
        <li
          className={`${props.page === 1 && 'pointer_disabled'}`}
          onClick={() => props.setPage(props.page - 1)}>
          &laquo;
        </li>
        {props.pages?.links?.map((page) => (
          <li
            key={page.id}
            className={`${page.label === '&laquo; Previous' && 'd-none'} ${
              page.label === 'Next &raquo;' && 'd-none'
            } ${page.label === '...' && 'd-none'} ${
              page.label === props.page && 'active'
            }`}
            onClick={() => props.setPage(page.label)}>
            {page.label}
          </li>
        ))}
        <li
          className={`${
            props.page === props.pages?.last_page && 'pointer_disabled'
          }`}
          onClick={() => props.setPage(props.page + 1)}>
          &raquo;
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
