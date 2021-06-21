import React from 'react';
import { Link } from 'react-router-dom';

function NavList(props) {
  const allCategory = (e) => {
    e.preventDefault();
    props.setCategoryBar(!props.categoryBar);
  };
  return (
    <div className="nav_links d-flex align-items-center">
      {/* <Link to="#" className="all_category nav-all " onClick={allCategory}>
        all categories <span class="lnr lnr-menu"></span>
      </Link> */}
      {/* <Link to="#" className="responsive_all_category" onClick={allCategory}>
        all categories <span class="lnr lnr-menu"></span>
      </Link> */}
      <div className="m-auto">
        <ul className="">
          {/* <li>
          <Link to="#" className="" onClick={allCategory}>
            all categories <span class="lnr lnr-menu"></span>
          </Link>
        </li> */}
          {/* <li>nav-all
          <Link className="nav-sections" to="#">
            all pages <span className="lnr lnr-chevron-down" />
          </Link>
        </li> */}
          <li>
            <Link className="nav-sections" to="/">
              <img
                src="./uparzonassets/svg/icons/navLeft/giftcard.svg"
                alt="gift card"
              />
              gift cards
            </Link>
          </li>
          {/* <li>
          <Link className="nav-sections" to="#">
            trending styles
          </Link>
        </li> */}
          <li>
            <Link className="nav-sections" to="/">
              <img
                src="./uparzonassets/svg/icons/navLeft/priorityShop.svg"
                alt="priority Shop"
              />
              priority shop
            </Link>
          </li>
          <li>
            <Link className="nav-sections campaign_list" to="/campaign">
              <img
                src="./uparzonassets/svg/icons/navLeft/campaign.svg"
                alt="campaign"
              />
              campaign
            </Link>
          </li>
          <li>
            <Link className="nav-sections" to="/">
              <img
                src="./uparzonassets/svg/icons/navLeft/express.svg"
                alt="express"
              />
              uparzon express
            </Link>
          </li>
          <li>
            <Link className="nav-sections " to="/">
              <img
                src="./uparzonassets/svg/icons/navLeft/uparzon_offer.svg"
                alt="uparzon_offer"
              />
              Uparzon Offer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavList;
