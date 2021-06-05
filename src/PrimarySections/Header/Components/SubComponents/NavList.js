import React from 'react';
import { Link } from 'react-router-dom';

function NavList(props) {
  const allCategory = (e) => {
    e.preventDefault();
    props.setCategoryBar(!props.categoryBar);
  };
  return (
    <div className="nav_links">
      <ul>
        <li>
          <Link to="#" className="nav-all" onClick={allCategory}>
            all categories <span class="lnr lnr-menu"></span>
          </Link>
        </li>
        <li>
          <Link to="#">
            all pages <span className="lnr lnr-chevron-down" />
          </Link>
        </li>
        <li>
          <Link to="#">featured brands</Link>
        </li>
        <li>
          <Link to="#">trending styles</Link>
        </li>
        <li>
          <Link to="#">gift cards</Link>
        </li>
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="#">tech products</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavList;
