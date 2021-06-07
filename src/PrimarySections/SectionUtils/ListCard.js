import React from 'react';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';
import './listcard.css';
import SectionHeadingTwo from './SectionHeadingTwo';

export default function ListCard(props) {
  return (
    <div
      className={`${
        props.fullWidth ? 'col-12' : 'col-md-3'
      } product_list col-6  pl-0`}>
      <SectionHeadingTwo section_title={props.title} list={props.list} />
      <div className="">
        {props.data?.map((product) => (
          <div className={`home_product_list_wrapper col mb-3`}>
            <div className="d-flex">
              <div className={`list_product_image pr-1`}>
                {props.demoImage ? (
                  <img src={`${product?.photo}`} alt="" />
                ) : (
                  <img src={`https:${product?.photo}`} alt="" />
                )}
              </div>
              <div className="list_product_body">
                <div className="list_product_name">
                  {/* <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p> */}
                  <Link to="/id">
                    <p>{Truncate(product?.name, 30)}</p>
                  </Link>
                </div>
                <div className={`list_product_rating d-flex`}>
                  {Array(5)
                    .fill()
                    .map((e) => (
                      <img
                        src="./uparzonassets/svg/icons/Icon-star.svg"
                        alt=""
                      />
                    ))}
                </div>
                <div className={`list_product_price d-flex`}>
                  <p>&#2547; {product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
