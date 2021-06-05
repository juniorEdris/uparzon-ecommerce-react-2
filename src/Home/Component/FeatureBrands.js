import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import BrandSlider from '../../PrimarySections/SliderComponents/BrandSlider';

const FeatureBrands = (props) => {
  const brands = [
    {
      id: 1,
      image: 'square.png',
      brand_name: 'Square co. ltd',
    },
    {
      id: 2,
      image: 'ibnsina.png',
      brand_name: 'Ibn Sina',
    },
    {
      id: 3,
      image: 'radiant.png',
      brand_name: 'Radiant Ltd',
    },
    {
      id: 4,
      image: 'ibnsina.png',
      brand_name: 'ibnsina Ltd',
    },
    {
      id: 5,
      image: 'square.png',
      brand_name: 'square Ltd',
    },
    {
      id: 6,
      image: 'radiant.png',
      brand_name: 'Radiant Ltd',
    },
    {
      id: 7,
      image: 'beacon.png',
      brand_name: 'Radiant Ltd',
    },
    {
      id: 8,
      image: 'square.png',
      brand_name: 'Radiant Ltd',
    },
  ];
  return (
    <div className="feature_brands mb-5">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width={'100%'} height={'60px'} className="mb-4" />
          <div className="row">
            {Array(6)
              .fill()
              .map((x, i) => (
                <div className="col-6 col-md-4 col-lg-2" key={i}>
                  <Skeleton width={'100%'} height={'200px'} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        props.brands?.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingOne
              fontStyleOne={'Feature'}
              fontStyleTwo={'Brands'}
            />
            <div className="feature_slider box-shadow">
              <BrandSlider brands={props.brands} />
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
