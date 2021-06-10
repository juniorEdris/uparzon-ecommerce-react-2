import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import ProductCard from '../../PrimarySections/SectionUtils/ProductCard';
import SectionHeadingTwo from '../../PrimarySections/SectionUtils/SectionHeadingTwo';

function RelatedProducts(props) {
  const options = {
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
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
    <div className="related_products chilldren-gap-top chilldren-gap-bottom">
      <SectionHeadingTwo section_title={'Related Products'} />
      <ReactOwlCarousel {...options}>
        {props.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ReactOwlCarousel>
    </div>
  );
}

export default RelatedProducts;
