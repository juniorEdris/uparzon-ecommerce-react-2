import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import WideBanner from '../../PrimarySections/SectionUtils/WideBanner';

const BannerSection = (props) => {
  return (
    <div className="wide_banner mb-5">
      {props.banner?.image_full_path && (
        <div className="container-md-fluid">
          <SectionHeadingOne
            fontStyleOne={'Good Health and'}
            fontStyleTwo={'Grand Saving'}
          />
          {/* <div className="wide_banner_image">
          <img src={`./assets/images/discountBanner/banner.png`} alt={``} />
        </div> */}
          <WideBanner
            loading={props.loading}
            imagepath={props.banner?.image_full_path}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  banner: state.HomeContent.homebrandBtmBanner,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSection);
