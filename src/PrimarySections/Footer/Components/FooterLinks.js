import React from 'react';
import LeftSection from './SubComponents/LeftSection';
import Right from './SubComponents/Right';

function FooterLinks() {
  return (
    <div className="footer_top_wrapper chilldren-gap-top">
      <div className="container-md-fluid">
        <div className="row .no-gutters">
          <LeftSection />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
