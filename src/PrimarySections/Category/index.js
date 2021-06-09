import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList(props) {
  return (
    <div className="sidebar_list_wrapper col mb-4">
      <h5 className="sidebar_headings">categories</h5>
      <ul className="sidebar_list not-square-option">
        {props.categories?.map((cat) => (
          <li>
            <Link to="#" onClick={(e) => e.preventDefault()}>
              {cat.name}
            </Link>
          </li>
        ))}
        {/* <li>
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
          </li> */}
      </ul>
    </div>
  );
}

export default CategoryList;
