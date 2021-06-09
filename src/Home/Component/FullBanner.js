import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/WideBanner';

const FullBanner = (props) => {
  let Banner;
  props.banners?.forEach((banner) => {
    if (banner.type === 'Large') {
      Banner = banner.photo;
    }
  });
  console.log(Banner, 'banner');
  return (
    <div className="section-gap-top">
      <WideBanner
        fullWidth
        // imageone={`uparzonassets/uparzonimages/banners/middle_banners/full-banner-1.png`}
        // imageone={props.banners && `https:${props.banners[0]?.image}`}
        imageone={props.banners && `https:${Banner}`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  banners: state.HomeContent.allbanners,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullBanner);
