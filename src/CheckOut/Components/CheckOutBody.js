import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { rewardCash, total_deli_charge } from '../../PrimarySections/Utility';
import { GetAreaOption, GetUserUpazilla } from '../../Redux/Action/GetUserInfoAction';
import CashBack from './SubComponents/CashBack';
import DeliveryDetailsInput from './SubComponents/DeliveryDetailsInput';
import PaymentMethod from './SubComponents/PaymentMethod';
import PriceDetails from './SubComponents/PriceDetails';

const CheckOutBody = (props) => {
  const [DeliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    area: '',
    address: '',
    zip: '',
  });
  const [paymentType, setPaymentType] = useState('ub');
  const [storeAddress, setStoreAddress] = useState(false);
  useEffect(() => {
    setDeliveryDetails({
      name: props.info?.name,
      phone: props.info?.phone,
      email: props.info?.email,
      district: props.info?.district_id || '',
      upazilla: props.info?.upazila_id || '',
      area: props.info?.area_id || '',
      address: props.info?.address || '',
      zip: props.info?.zip || '',
    });
  }, [props.info]);
  useEffect(() => {
    DeliveryDetails.district && props.getUpazilla(DeliveryDetails.district);
    setDeliveryDetails({ ...DeliveryDetails, upazilla: '' });
  }, [DeliveryDetails.district]);
  useEffect(() => {
    DeliveryDetails.upazilla && props.getArea(DeliveryDetails.upazilla);
    setDeliveryDetails({ ...DeliveryDetails, area: '' });
  }, [DeliveryDetails.upazilla]);
  //  storing all the API queries in varriables
  let inside_delivery_charge = [];// need fix
  let outside_delivery_charge = [];// need fix
  let inside;
  let outside;
  let delivery_location_charge;
  let arr = [];
  let adjusted_amount;
  let rc_adjusted_amount = [];
  let vendorID = [];
  props.cartList.forEach(x => {
    x.shop_cart_products.forEach(x => {
      const prod = {
        product_id: x.id,
        color: x.color,
        vendor_price: x.vendor_price,
        size: x.size,
        price: x.price,
        size_qty: x.size_qty,
        qty: x.qty_request_to_buy,
        size_key: null,
      };
      arr.push(prod);
      vendorID.push(x.shop_id); // no need
    })
  });
  // rc_adjusted_price
  arr.forEach(x => {
    const amount = x.price - x.vendor_price;
    rc_adjusted_amount.push(amount);
  });
  adjusted_amount = rewardCash(rc_adjusted_amount);
  inside = total_deli_charge(inside_delivery_charge);
  outside = total_deli_charge(outside_delivery_charge);
  delivery_location_charge = inside;
  // const total = getCartProdTotal(
  //   getActiveCartProdSubTotal(props.finalCart),
  //   delivery_location_charge
  // );

  return (
    <div className="checkout_body row">
      <div className="col-md-6">
        <DeliveryDetailsInput
          details={DeliveryDetails}
          setDetails={setDeliveryDetails}
          storeAddress={storeAddress}
          setStoreAddress={setStoreAddress}
          district_lists={ props.district_lists}
          upazilla_lists={ props.upazilla_lists}
          area_lists={ props.area_lists}
        />
      </div>
      <div className="col-md-6">
        <PaymentMethod type={paymentType} setType={setPaymentType} />
        <CashBack cashBack={ adjusted_amount}/>
        <PriceDetails details={DeliveryDetails} type={paymentType} cashBack={ adjusted_amount}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.UserInfo.info,
  district_lists: state.UserInfo.districts_lists,
  upazilla_lists: state.UserInfo.userUpazilla,
  area_lists: state.UserInfo.userAreas,
  cartList: state.CartItems.basket || [],
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  getArea: (id) => dispatch(GetAreaOption(id)),
  getUpazilla: (id) => dispatch(GetUserUpazilla(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutBody);
