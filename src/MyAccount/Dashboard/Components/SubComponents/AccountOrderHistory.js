import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AccountOrderHistory = (props) => {
  const orderDetails = (e) => {
    props.setTab('order');
    props.setOrderId('order');
  };
  const viewAll = (e) => {
    e.preventDefault();
    props.setTab('order');
  };
  let recentOrders = [];
  for (let i = 0; i <= 3; i++) {
    recentOrders.push(props.orders[i]);
  }
  return (
    <div className="">
      <div className="order_header pl-4 pr-4">
        <span>Recent Orders</span>
        <Link to="#" onClick={viewAll}>
          view all
        </Link>
      </div>
      {props.loading ? (
        <div className="order_lists primary_table">
          <Skeleton height={350} width={'100%'} />
        </div>
      ) : props.orders?.length < 1 ? (
        <div className=" order_lists primary_table d-flex align-items-center justify-content-center null_result">
          <h3 className="">No orders yet!</h3>
        </div>
      ) : props.orders?.length > 3 ? (
        <div className="order_lists primary_table">
          <table class="table">
            <thead class="thead-primary">
              <tr>
                <th scope="col">Order#</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Ship To</th> */}
                <th scope="col">Order Total</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {recentOrders?.map((order) => (
                <tr className="trow-light" key={order?.id}>
                  <th scope="row">
                    <div className="order-table-id">#{order?.order_number}</div>
                  </th>
                  <td>
                    <div className="order-table-date">
                      {dateFormat(
                        order?.order_date,
                        'dddd, mmmm dS, yyyy, h:MM:ss TT'
                      )}
                    </div>
                  </td>
                  {/* <td>Eftekar Raghib</td> */}
                  <td>
                    <div className="order-table-price">
                      Tk {order?.pay_amount}
                    </div>
                  </td>
                  <td>{order?.delivery_status}</td>
                  <td>
                    <div className="order-table-btn">
                      <Link
                        to={`#`}
                        // to={`/order-info?id=${order.id}`}
                        className="table_link d-block"
                        onClick={(e) => {
                          e.preventDefault();
                          props.setTab('orderInfo');
                          props.setOrderId(order?.id);
                        }}>
                        view order
                      </Link>
                    </div>
                  </td>
                  {/* <td>
                    <div className="order-table-btn">
                      <Link
                        to={`/order-info?id=${order.id}`}
                        className="table_link d-block">
                        Cancel order
                      </Link>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="order_lists primary_table">
          <table class="table">
            <thead class="thead-primary">
              <tr>
                <th scope="col">Order#</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Ship To</th> */}
                <th scope="col">Order Total</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {props.orders?.map((order) => (
                <tr className="trow-light" key={order?.id}>
                  <th scope="row">
                    <div className="order-table-id">#{order?.order_number}</div>
                  </th>
                  <td>
                    <div className="order-table-date">
                      {dateFormat(
                        order?.order_date,
                        'dddd, mmmm dS, yyyy, h:MM:ss TT'
                      )}
                    </div>
                  </td>
                  {/* <td>Eftekar Raghib</td> */}
                  <td>
                    <div className="order-table-price">
                      Tk {order?.pay_amount}
                    </div>
                  </td>
                  <td>{order?.delivery_status}</td>
                  <td>
                    <div className="order-table-btn">
                      <Link
                        to={`#`}
                        // to={`/order-info?id=${order.id}`}
                        className="table_link d-block"
                        onClick={(e) => {
                          e.preventDefault();
                          props.setTab('orderInfo');
                          props.setOrderId(order?.id);
                        }}>
                        view order
                      </Link>
                    </div>
                  </td>
                  {/* <td>
                    <div className="order-table-btn">
                      <Link
                        to={`/order-info?id=${order.id}`}
                        className="table_link d-block">
                        Cancel order
                      </Link>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}{' '}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountOrderHistory);
