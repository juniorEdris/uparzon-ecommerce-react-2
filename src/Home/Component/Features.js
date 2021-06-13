import React from 'react';
import { connect } from 'react-redux';
import './features.css';

export const Features = (props) => {
  const images = [
    {
      id: 1,
      image: 'shipping-fast.svg',
      name: 'Free Shipping',
      small: 'free shipping on all us order',
    },
    {
      id: 2,
      image: 'phone-call.svg',
      name: 'Support 24/7',
      small: 'Contact us 24 hours a day',
    },
    {
      id: 3,
      image: 'hourglass-full.svg',
      name: '100% Money Back',
      small: 'You have 30 days to Return',
    },
    {
      id: 4,
      image: 'shipping-fast.svg',
      name: '90 Days Return',
      small: 'If goods have problems',
    },
    {
      id: 5,
      image: 'simple-f-secure.svg',
      name: 'Payment Secure',
      small: 'We ensure secure payment',
      fullWidth: true,
    },
  ];
  return (
    <div className="home_feature_area mb-5 mb-md-2 ">
      <div className="container-md-fluid">
        <div className="features_body">
          <div className="row align-tems-center">
            {images.map((image) => (
              <div
                className={`single_feature col-features ${
                  image.fullWidth ? 'col-12' : 'col-6'
                } mb-3`}
                key={image.id}>
                <div className="d-flex align-items-center feature_border feature_shadow flex-wrap justify-content-center">
                  <div className="image">
                    <img
                      src={`./uparzonassets/svg/icons/features/${image.image}`}
                      alt={'feature images'}
                    />
                  </div>
                  <div className="text mb-2">
                    <p className="p-0 m-0">{image.name}</p>
                    <small>{image.small}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
