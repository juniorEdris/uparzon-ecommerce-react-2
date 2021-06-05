import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './hompageCategory.css';

const HompageCategories = (props) => {
  const products = [
    {
      id: 1,
      name: 'Computer and Desktop Accessories',
      photo: 'pc.png',
      discount: 7,
    },
    {
      id: 2,
      name: 'Computer and Desktop Accessories',
      photo: 'watch.png',
      discount: 7,
    },
    {
      id: 3,
      name: 'Computer and Desktop Accessories',
      photo: 'game.png',
      discount: 7,
    },
    {
      id: 4,
      name: 'Computer and Desktop Accessories',
      photo: 'mobile.png',
      discount: 7,
    },
  ];

  return (
    <div>
      <div className="container-md-fluid">
        <div className={`category_row_wrapper d-flex flex-wrap`}>
          {products.map((product) => (
            <div
              className={`single_category_wrapper  col-md-4 col-lg-3 p-1`}
              key={product.id}>
              {/* p-0 pr-3 */}
              <div className={`single_category_box d-flex `} key={product.id}>
                <div className={`category_image`}>
                  <img
                    src={`./uparzonassets/uparzonimages/categoryproducts/${product.photo}`}
                    alt={product.name}
                  />
                </div>
                <div className={`category_details`}>
                  <div className={`category_name`}>
                    <span>{product.name}</span>
                  </div>
                  <div className={`category_btn`}>
                    <Link to="#">shop now</Link>
                  </div>
                  {/* <div className={`category_discount d-flex `}>
                      <div
                        className={`discount_text d-flex flex-column`}>
                        <span>Up</span>
                        <span>to</span>
                      </div>
                      <div className={`discount_number`}>7%</div>
                    </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HompageCategories);
