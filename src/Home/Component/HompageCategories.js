import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
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
  // get Only 4 categories
  let categories = [];
  for (let i = 0; i <= 3; i++) {
    categories.push(props.categoryProducts[i]);
  }
  const options = {
    loop: true,
    // margin: 15,
    nav: false,
    dots: false,
    responsive: {
      0: {
        // items: 3.5,
        items: 2,
        // nav: false,
      },
      700: {
        items: 4,
      },
      // 1200: {
      //   items: 6,
      // },
      // 1550: {
      //   items: 8,
      // },
    },
  };

  return (
    <div>
      <div className="container-md-fluid">
        <div className={`category_row_wrapper d-flex flex-wrap`}>
          {/* <ReactOwlCarousel items={4} className="owl-theme" {...options}> */}
          {categories?.map((product) => (
            <div
              className={`single_category_wrapper col-6 col-lg-3  p-1 mb-2 mb-lg-0`}
              key={product?.id}>
              {/* p-0 pr-3 col-md-4 col-6 col-lg-3*/}
              <div
                className={`single_category_box d-flex align-items-center`}
                key={product?.id}>
                <div className={`category_image`}>
                  <img src={`https:${product?.photo}`} alt={product?.name} />
                </div>
                <div className={`category_details`}>
                  <div className={`category_name`}>
                    <span>{product?.name}</span>
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
          {/* </ReactOwlCarousel> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categoryProducts: state.HomeContent.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HompageCategories);
