import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import Body from './SubComponent/HealthBannerBody';

const HealthCareBanner = (props) => {
  return (
    <div className="health_care_banner mb-5">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width={'100%'} height={60} className="mb-4" />
          <div className="health_banner_body col-12">
            <div className="row">
              {Array(4)
                .fill()
                .map((banner, i) => (
                  <div
                    className="health_banner_image col-12 col-md-3 all-wide-banner pl-0"
                    key={i}>
                    <Skeleton width={'100%'} height={290} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        props.banners?.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingOne
              fontStyleOne={'Healthcare'}
              fontStyleTwo={'and More'}
              reverse={true}
            />
            <Body />
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  banners: state.HomeContent.healthCareBanner,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthCareBanner);
