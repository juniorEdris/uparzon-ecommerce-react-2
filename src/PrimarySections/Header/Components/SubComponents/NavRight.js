import React from 'react';
import { Link } from 'react-router-dom';

function NavRight() {
  return (
    <div className="more_link">
      <Link to="#">
        <img
          src="./uparzonassets/svg/icons/navRight/blender-phone.svg"
          alt=""
        />
        <span>Hotline : +8801610 186 286</span>
      </Link>
      <span className="divider"></span>{' '}
      <Link to="#">
        <span>Free Shipping on Order ৳2000+</span>
      </Link>
    </div>
  );
}

export default NavRight;
