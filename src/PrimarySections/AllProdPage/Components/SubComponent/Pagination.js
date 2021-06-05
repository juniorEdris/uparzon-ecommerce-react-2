import React from 'react';
import { connect } from 'react-redux';
import './pagination.css';

const Pagination = (props) => {
  return (
    <div className="pagination mt-3">
      <ul className="row no-gutters align-items-center">
        <li>&laquo;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>&raquo;</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
