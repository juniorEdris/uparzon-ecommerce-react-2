import React from 'react';
import { connect } from 'react-redux';
import ListCard from '../../PrimarySections/SectionUtils/ListCard';

const ListProductsSection = (props) => {
  const data = [
    {
      id: 47,
      sku: 'H475711RlI',
      shop_id: 10,
      shop_name: 'Uparzon Mall',
      category_id: 39,
      name: 'Spring Rainbow Toy - Multicolor',
      photo:
        '//store.uparzon.com/assets/images/products/app/1601529115sDT1rthg.jpg',
      thumbnail:
        '//store.uparzon.com/assets/images/thumbnails/app/1601529115ADf6VNuh.jpg',
      size: [],
      size_qty: [],
      size_price: [],
      color: [],
      price: 300,
      vendor_price: 285,
      featured: 0,
      hot: 0,
      stock: 20,
      colors: '',
      product_condition: 0,
      ship: null,
      type: 'Physical',
      link: null,
      measurement_unit: null,
      is_discount: 0,
      discount_date: null,
      rating: 'No rating yet',
      reviews: [],
      is_grocery: false,
      is_medicine: false,
      qty_request_to_buy: null,
      vendor_delivery: {
        id: 32,
        name: null,
        min_order: 350,
        inside_deli_charge: 60,
        outside_deli_charge: 100,
        inside_deli_time: '3-4 hours',
        outside_deli_time: '3-5 days',
        vendor_district: 'Chattogram(City)',
        vendor_district_id: 65,
        status: 1,
        created_at: '',
      },
    },
  ];
  return (
    <div className="section-gap-top">
      <div className="d-flex flex-wrap col-12 p-0">
        <ListCard data={props.products[0]} title={'Electronic Devices'} list />
        <ListCard data={props.products[1]} title={`Men's Fashion`} list />
        <ListCard data={props.products[2]} title={`Women's Fashion`} list />
        {/* <ListCard title={ 'Headphones'}/> */}
        <div className={`col-md-3 col-6 list_view_section_banner`}>
          <img
            src="./uparzonassets/uparzonimages/banners/imageBanner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.categoryProducts,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProductsSection);

// data={props.products[1]}
