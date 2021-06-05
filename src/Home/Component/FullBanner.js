import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/WideBanner';

const FullBanner = (props) => {
  return (
    <div className="section-gap-top">
      <WideBanner
        fullWidth
        imageone={`uparzonassets/uparzonimages/banners/middle_banners/full-banner-1.png`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullBanner);
