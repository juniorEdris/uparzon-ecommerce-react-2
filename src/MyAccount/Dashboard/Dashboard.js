import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashBody from './Components/DashBody';
import DashSidebar from './Components/DashSidebar';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './dashboard.css';
import { getUserInfo } from '../../Redux/Action/GetUserInfoAction';
import { getOrderList } from '../../Redux/Action/OrderListAction';
import SpinLoader from '../../PrimarySections/SectionUtils/SpinLoader';
import { guestCartItem } from '../../Redux/Action/BasketAction';
import { guestWishItem } from '../../Redux/Action/WishListAction';

const Dashboard = (props) => {
  console.log(props.geustListloading);
  useEffect(() => {
    props.getCartItems();
    props.User && props.getUserInfo();
    props.User && props.getOrderList();
  }, []);
  useEffect(() => {
    props.guestCartSubmit();
    props.guestWishSubmit();
    props.getOrderList();
  }, []);
  const [tab, setTab] = useState('dashboard');
  const [orderId, setOrderId] = useState('');
  return (
    <div className="dashboard_wrapper container-md-fluid">
      {props.logOutRequest && <SpinLoader />}
      {props.loading && <SpinLoader />}
      <div className="row">
        <div className="col-md-4 col-xl-2 p-md-2">
          <DashSidebar tab={tab} setTab={setTab} />
        </div>
        <div className="col-md-8 col-xl-10 p-md-2">
          <DashBody
            tab={tab}
            setTab={setTab}
            orderId={orderId}
            setOrderId={setOrderId}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  User: state.User.user,
  info: state.UserInfo.info,
  orders: state.OrderList.orders,
  loading: state.AccountInfo.storeInfoloading,
  response: state.AccountInfo.storeInfoStatus,
  localCartList: state.Basket.localBasket,
  geustListloading: state.Basket.loading,
  logOutRequest: state.User.logOutRequest,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
  getUserInfo: () => dispatch(getUserInfo()),
  getOrderList: () => dispatch(getOrderList()),
  guestCartSubmit: (array) => dispatch(guestCartItem(array)),
  guestWishSubmit: (array) => dispatch(guestWishItem(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
