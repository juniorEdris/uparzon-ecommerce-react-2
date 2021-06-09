import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/WideBanner';

const HalfBanners = (props) => {
  let Banner;
  props.banners?.forEach((banner) => {
    if (banner.type === 'Large') {
      Banner = banner.photo;
    }
  });
  return (
    <div className="section-gap-top">
      <WideBanner
        imageone={props.banners && `https:${props.banners[0]?.photo}`}
        imagetwo={props.banners && `https:${props.banners[1]?.photo}`}
        // imageone={`./uparzonassets/uparzonimages/banners/middle_banners/half-banner-1.png`}
        // imagetwo={`./uparzonassets/uparzonimages/banners/middle_banners/half-banner-2.png`}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  banners: state.HomeContent.allbanners,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HalfBanners);
