import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = (props) => {
  return (
    <div className="product_slider_wrapper">
      {props.loading ? (
        <Skeleton width={'100%'} height={'390px'} />
      ) : (
        <Carousel
          autoPlay
          interval="3000"
          transitionTime="1000"
          infiniteLoop
            showIndicators={false}>
          <img
            src={`http:${props.details?.photo}`}
            // src={`./uparzonassets/uparzonimages/products/slider/Image 95.png`}
            className="slider_image"
            alt={props.details?.name}
            />
        </Carousel>

      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
