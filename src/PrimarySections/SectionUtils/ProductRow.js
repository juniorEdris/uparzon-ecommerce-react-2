import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import './productRow.css';
import SectionHeadingTwo from './SectionHeadingTwo';

const ProductRow = (props) => {
  return (
    <div className=" section-gap-top">
      <SectionHeadingTwo
        section_title={
          props.title //props.data[0].category ? props.data[0].category?.name :
        }
      />
      <div className={`d-flex flex-wrap `}>
        <div
          className={`row_single_banner  col-6 col-md-4 col-lg-2 pb-2 pr-md-2 pl-md-2`}>
          {/* col-xxl-2 mb-3 col-xxl-1 */} {/*col-12 col-md-2  mb-2 */}
          <img src={props.imgPath} alt={props.title} />
        </div>
        {/* <div className="product_row d-flex flex-wrap p-0 col-md-10"> */}
        {props.data?.map((product) => (
          <div className="col-6 col-md-4 col-lg-2 pb-2 pr-md-2 pl-md-2">
            {/* col-xxl-2 mb-3 col-xxl-1 */}
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
