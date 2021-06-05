import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/SectionUtils/WideBanner';

const BannerSectionThree = (props) => {
  return (
    <div className="">
      {props.banner?.image_full_path && (
        <div className="">
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
  banner: state.HomeContent.homebtmLargeBanner,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSectionThree);
