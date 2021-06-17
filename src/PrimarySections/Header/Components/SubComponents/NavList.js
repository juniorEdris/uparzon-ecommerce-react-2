import React from 'react';
import { Link } from 'react-router-dom';

function NavList(props) {
  const allCategory = (e) => {
    e.preventDefault();
    props.setCategoryBar(!props.categoryBar);
  };
  return (
    <div className="nav_links">
      {/* <Link to="#" className="all_category " onClick={allCategory}>
        all categories <span class="lnr lnr-menu"></span>
      </Link> */}
      <Link to="#" className="responsive_all_category" onClick={allCategory}>
        all categories <span class="lnr lnr-menu"></span>
      </Link>
      <ul>
        <li>
          <Link to="#" className="nav-all" onClick={allCategory}>
            all categories <span class="lnr lnr-menu"></span>
          </Link>
        </li>
        {/* <li>
          <Link className="nav-sections" to="#">
            all pages <span className="lnr lnr-chevron-down" />
          </Link>
        </li> */}
        <li>
          <Link className="nav-sections" to="#">
            featured brands
          </Link>
        </li>
        {/* <li>
          <Link className="nav-sections" to="#">
            trending styles
          </Link>
        </li> */}
        <li>
          <Link className="nav-sections" to="#">
            gift cards
          </Link>
        </li>
        <li>
          <Link className="nav-sections" to="/shop">
            shop
          </Link>
        </li>
        <li>
          <Link className="nav-sections" to="#">
            tech products
          </Link>
        </li>
        <li>
          <Link className="nav-sections " to="/campaign">
            campaign
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavList;
