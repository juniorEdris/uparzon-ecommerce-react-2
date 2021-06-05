import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAreaOption } from '../../Redux/Action/GetUserInfoAction';
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
  useEffect(() => {
    setDeliveryDetails({
      name: props.info?.name,
      phone: props.info?.phone,
      email: props.info?.email,
      district: props.info?.district_i || '',
      area: props.info?.area_i || '',
      address: props.info?.address,
      zip: props.info?.zip || '',
    });
  }, [props.info]);
  useEffect(() => {
    props.getArea(DeliveryDetails.district);
    setDeliveryDetails({ ...DeliveryDetails, area: '' });
  }, [DeliveryDetails.district]);
  return (
    <div className="checkout_body row">
      <div className="col-md-6">
        <DeliveryDetailsInput
          details={DeliveryDetails}
          setDetails={setDeliveryDetails}
        />
        <PaymentMethod type={paymentType} setType={setPaymentType} />
      </div>
      <div className="col-md-6">
        <PriceDetails details={DeliveryDetails} type={paymentType} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.UserInfo.info,
});

const mapDispatchToProps = (dispatch) => ({
  getArea: (id) => dispatch(GetAreaOption(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutBody);
