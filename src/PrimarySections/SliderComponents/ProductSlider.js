import React from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import ProductCard from '../SectionUtils/ProductCard';

const ProductSlider = (props) => {
  const options = {
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      700: {
        items: 3,
      },
      // 900: {
      //   items: 4,
      // },
      1200: {
        items: 5.5,
        // freeDrag:true,
      },
      1550: {
        items: 7.5,
        // freeDrag:true,
      },
      1700: {
        items: 7,
        // freeDrag:true,
        // center:true,
      },
    },
  };

  return (
    <div className="product-section">
      <OwlCarousel
        className="owl-theme"
        {...options}
        navText={[
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ]}>
        {props.products?.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </OwlCarousel>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSlider);
