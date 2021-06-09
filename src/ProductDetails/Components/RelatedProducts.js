import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import ProductCard from '../../PrimarySections/SectionUtils/ProductCard';

function RelatedProducts(props) {
  return (
    <div className="related_products">
      <h1>related</h1>
      <ReactOwlCarousel>
        {props.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ReactOwlCarousel>
    </div>
  );
}

export default RelatedProducts;
