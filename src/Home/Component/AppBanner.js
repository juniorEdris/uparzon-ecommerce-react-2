import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/WideBanner';

const BottomBanner = (props) => {
  let Banner;
  props.banners?.forEach((banner) => {
    if (banner.type === 'BottomSmall') {
      Banner = banner.photo;
    }
  });
  return (
    <div className="section-gap-top">
      <WideBanner
        fullWidth
        imageone={props.banners && `https:${Banner}`}
        // imageone={`./uparzonassets/uparzonimages/banners/footer_banners/footer_one.png`}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  banners: state.HomeContent.allbanners,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BottomBanner);
