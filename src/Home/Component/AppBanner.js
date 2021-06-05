import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/WideBanner';

const BottomBanner = (props) => {
  return (
    <div className="section-gap-top">
      <WideBanner
        fullWidth
        imageone={`./uparzonassets/uparzonimages/banners/footer_banners/footer_one.png`}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  banner: state.HomeContent.homeappBanner,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BottomBanner);
