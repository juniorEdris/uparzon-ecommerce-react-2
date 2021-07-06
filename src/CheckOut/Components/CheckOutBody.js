import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
  const [paymentType, setPaymentType] = useState('Cash on Delivery');
  const [storeAddress, setStoreAddress] = useState(false);
  useEffect(() => {
    setDeliveryDetails({
      name: props.info?.name,
      phone: props.info?.phone,
      email: props.info?.email,
      district: props.info?.district_id || '',
      upazilla: props.info?.upazila_id || '',
      area: props.info?.area_id || '',
      address: props.info?.address,
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
        <CashBack/>
        <PriceDetails details={DeliveryDetails} type={paymentType} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.UserInfo.info,
  district_lists: state.UserInfo.districts_lists,
  upazilla_lists: state.UserInfo.userUpazilla,
  area_lists: state.UserInfo.userAreas,
});

const mapDispatchToProps = (dispatch) => ({
  getArea: (id) => dispatch(GetAreaOption(id)),
  getUpazilla: (id) => dispatch(GetUserUpazilla(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutBody);
