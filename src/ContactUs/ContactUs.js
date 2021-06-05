import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PopUp } from '../PrimarySections/SectionUtils/PopUp';
import SpinLoader from '../PrimarySections/SectionUtils/SpinLoader';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import { ClearContactMessage } from '../Redux/Action/ContactMessageAction';
import ContactDetails from './Components/ContactDetails';
import ContactForm from './Components/ContactForm';
import Map from './Components/Map';
import './contact_us.css';

const ContactUs = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  const clearMsg = (e) => {
    props.clearMsg();
  };
  return (
    <div className="contact_wrapper container-md">
      {props.sendRequest && <SpinLoader />}
      <Map />
      <ContactDetails />
      <ContactForm />
      {props.success && <PopUp close={clearMsg} response={props.success} />}

      {/* {props.error.name && (
        <PopUp close={clearMsg} response={props.error.name} />
      )}
      {props.error.email && (
        <PopUp close={clearMsg} response={props.error.email} />
      )}
      {props.error.subject && (
        <PopUp close={clearMsg} response={props.error.subject} />
      )}
      {props.error.message && (
        <PopUp close={clearMsg} response={props.error.name} />
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.Contact.error,
  success: state.Contact.contactConfirm,
  sendRequest: state.Contact.sendMsgReq,
});

const mapDispatchToProps = (dispatch) => ({
  clearMsg: () => dispatch(ClearContactMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
