import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { image_u } from '../../data';
import { Truncate } from '../../PrimarySections/Utility';

const OrderProducts = (props) => {
  let subTotal = () => {
    let allProd = [];
    props.order?.cart?.forEach((x) => {
      allProd.push(x.price * x.total_quantity);
    });
    return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  };
  
  return (
    <div className="product_table">
      <table className="table">
        <thead className="thead-primary">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {props.loading ? (
          <tbody>
            {Array(4)
              .fill()
              .map((tr) => (
                <tr>
                  <td colSpan={6}>
                    <Skeleton width={'100%'} height={30} />
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <tbody>
            {/* {props.order?.cart?.map((item) => ( */}
            {props.order?.map((item) => (
              <tr className="trow-light" key={item.product_id}>
                <td>
                  <div className="row no-gutters" style={{width:'300px'}}>
                    <div className="col-3">
                      <img src={image_u} alt=''/>    
                    </div>
                    <div className="col-9">
                      {Truncate(item.name, 15) || 'Lorem ipsum dolor sit amet consectetur adipisicing elit'}   
                    </div>
                  </div>
                  </td>
                <td>{item.total_quantity || 2}</td>
                <td>BDT {item.price || 450}</td>
                <td>
                  BDT{' '}
                  {
                  //   (Number(item.price) * Number(item.total_quantity)).toFixed(
                  //   2
                  // )
                   2200}
                </td>
                <td>
                  <Link
                    to={`/productdetails?id=${item.product_id}`}
                    className="table_link pointer_none">
                    {/* <img
                  src="./assets/svg/icons/light-shopping-cart.svg"
                  alt="cart img"
                /> */}
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            <tr className="order_price_card">
              <td colSpan="3" className="order_price_section">
                Sub Total
              </td>
              <td>BDT {subTotal().toFixed(2)}</td>
              <td></td>
            </tr>
            <tr className="order_price_card">
              <td colSpan="3" className="order_price_section">
                Regular (withine 24 hours)
              </td>
                <td>BDT {
                  // Number(props.order?.shipping_cost).toFixed(2) 
                   0}</td>
              <td></td>
            </tr>
            <tr className="order_price_card">
              <td colSpan="3" className="order_price_section">
                Total
              </td>
                <td>BDT {
                  // Number(props.order?.pay_amount).toFixed(2)
               0}</td>
              <td></td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts);
