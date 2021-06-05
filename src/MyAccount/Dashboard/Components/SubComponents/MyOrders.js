import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyOrders = (props) => {
  return (
    <div className="my_orders primary_table full_vh">
      <div className="order_header">
        <span>All Orders</span>
        <Link to="#">view all</Link>
      </div>
      {props.loading ? (
        <div className="">
          <Skeleton height={350} width={'100%'} />
        </div>
      ) : props.allOrders?.length < 1 ? (
        <div className=" d-flex align-items-center justify-content-center null_result">
          <h3 className="">No orders yet!</h3>
        </div>
      ) : (
        <table class="table">
          <thead class="thead-primary">
            <tr>
              <th scope="col">Order#</th>
              <th scope="col">Date</th>
              {/* <th scope="col">Ship To</th> */}
              <th scope="col">Order Total</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.allOrders?.map((order) => (
              <tr className="trow-light" key={order.id}>
                <th scope="row">
                  <div className="order-table-id">#{order.order_number}</div>
                </th>
                <td>
                  <div className="order-table-date">
                    {dateFormat(
                      order.order_date,
                      'dddd, mmmm dS, yyyy, h:MM:ss TT'
                    )}
                  </div>
                </td>
                {/* <td>Eftekar Raghib</td> */}
                <td>
                  <div className="order-table-price">Tk {order.pay_amount}</div>
                </td>
                <td>{order.delivery_status}</td>
                <td>
                  <div className="order-table-btn">
                    <Link
                      to={`#`}
                      // to={`/order-info?id=${order.id}`}
                      className="table_link d-block"
                      onClick={(e) => {
                        e.preventDefault();
                        props.setTab('orderInfo');
                        props.setOrderId(order.id);
                      }}>
                      view order
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.OrderList.loading,
  completedOrders: state.OrderList.completedOrders,
  allOrders: state.OrderList.orders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);

/*

  {props.loading ? (
        <div className="order_lists primary_table">
          <Skeleton height={350} width={'100%'} />
        </div>
      ) : props.orders?.length < 1 ? (
        <div className=" order_lists primary_table d-flex align-items-center justify-content-center null_result">
          <h3 className="">No orders yet!</h3>
        </div>
      )

*/
