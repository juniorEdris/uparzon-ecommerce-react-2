import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import BrandSlider from '../../PrimarySections/SliderComponents/BrandSlider';

const FeatureBrands = (props) => {
  const brands = [
    {
      id: 1,
      photo: '01.png',
      name: 'Square co. ltd',
    },
    {
      id: 2,
      photo: '02.png',
      name: 'Ibn Sina',
    },
    {
      id: 3,
      photo: '03.png',
      name: 'Radiant Ltd',
    },
    {
      id: 4,
      photo: '04.png',
      name: 'ibnsina Ltd',
    },
    {
      id: 5,
      photo: '05.png',
      name: 'square Ltd',
    },
    {
      id: 6,
      photo: '06.png',
      name: 'Radiant Ltd',
    },
  ];
  return (
    <div className="feature_brands mb-5 chilldren-gap-top">
      {props.loading ? (
        <div className="container-md-fluid">
          <div className="row">
            {Array(6)
              .fill()
              .map((x, i) => (
                <div className="col-6 col-md-4 col-lg-2 pt-2 pb-1" key={i}>
                  <Skeleton width={'100%'} height={'70px'} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        brands?.length > 0 && (
          <div className="container-md-fluid">
            {/* <SectionHeadingOne
              fontStyleOne={'Feature'}
              fontStyleTwo={'Brands'}
            /> */}
            <div className="feature_slider">
              <BrandSlider brands={brands} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  brands: state.HomeContent.homeBrands,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureBrands);
