import React from 'react';
import { connect } from 'react-redux';

const HealthBannerBody = (props) => {
  return (
    <div className="health_banner_body col-12">
      <div className="row">
        {props.banners?.map((banner) => (
          <div
            className="health_banner_image col-12 col-md-3 all-wide-banner pl-0"
            key={banner.id}>
            <img src={`https:${banner.photo}`} alt={'healthcare banners'} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  banners: state.HomeContent.healthCareBanner,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthBannerBody);
