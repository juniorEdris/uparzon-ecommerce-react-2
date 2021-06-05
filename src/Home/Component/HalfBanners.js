import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/WideBanner';

export const HalfBanners = (props) => {
  return (
    <div className="section-gap-top">
      <WideBanner
        imageone={`./uparzonassets/uparzonimages/banners/middle_banners/half-banner-1.png`}
        imagetwo={`./uparzonassets/uparzonimages/banners/middle_banners/half-banner-2.png`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HalfBanners);
