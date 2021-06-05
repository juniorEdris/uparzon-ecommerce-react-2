import React from 'react';
import NavList from './SubComponents/NavList';
import NavRight from './SubComponents/NavRight';

function HeaderNav(props) {
  return (
    <div className="header_nav">
      <NavList
        categoryBar={props.categoryBar}
        setCategoryBar={props.setCategoryBar}
      />
      <NavRight />
    </div>
  );
}

export default HeaderNav;
