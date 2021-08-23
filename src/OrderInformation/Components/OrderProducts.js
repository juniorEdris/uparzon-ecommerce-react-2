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
      allProd.push(x.price * x.qty);
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
            {props.order?.cart?.map((item) => (
              <tr className="trow-light" key={item.product_id}>
                <td>
                  <div className="row align-items-center" style={{width:'300px'}}>
                    <div className="col-3">
                      <img src={`https://${item.photo}`} alt={item.name}/>    
                    </div>
                    <div className="col-9">
                      {Truncate(item.name, 15)}   
                    </div>
                  </div>
                  </td>
                <td>{item.qty }</td>
                <td>BDT {item.price}</td>
                <td>
                  BDT{' '}
                  {
                    (Number(item.price) * Number(item.qty)).toFixed(
                      2
                    )}
                </td>
                <td>
                  <Link
                    to={`/productdetails?product=${item.slug}&id=${item.product_id}`}
                    className="table_link">
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
                  Number(props.order?.shipping_cost).toFixed(2) 
                   }</td>
              <td></td>
            </tr>
            <tr className="order_price_card">
              <td colSpan="3" className="order_price_section">
                Total
              </td>
                <td>BDT {
                  Number(props.order?.pay_amount).toFixed(2)
               }</td>
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
