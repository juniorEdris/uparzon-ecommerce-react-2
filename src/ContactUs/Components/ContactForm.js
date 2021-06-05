import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PopUp } from '../../PrimarySections/SectionUtils/PopUp';
import { SendContactMessage } from '../../Redux/Action/ContactMessageAction';

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState();
  const sendMsg = (e) => {
    e.preventDefault();
    // if (formData.name === '') {
    //   setError('name feild is required');
    // } else if (formData.email === '') {
    //   setError('email feild is required');
    // } else if (formData.subject === '') {
    //   setError('subject feild is required');
    // } else if (formData.message === '') {
    //   setError('message feild is required');
    // } else {
    // }
    props.sendMsg(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="contact_form offset-md-3 col-md-6 mb-5">
      <h1>Contact Form</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </div>
        {props.error?.name && (
          <div className="mt-2 mb-2">
            <p className="text-danger">{props.error.name}</p>
          </div>
        )}
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        {props.error?.email && (
          <div className="mt-2 mb-2">
            <p className="text-danger">{props.error.email}</p>
          </div>
        )}
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="Subject"
            name="subject"
            onChange={handleChange}
          />
        </div>
        {props.error?.subject && (
          <div className="mt-2 mb-2">
            <p className="text-danger">{props.error.subject}</p>
          </div>
        )}
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            placeholder="Message"
            name="message"
            onChange={handleChange}></textarea>
        </div>
        {props.error?.message && (
          <div className="mt-2 mb-2">
            <p className="text-danger">{props.error.message}</p>
          </div>
        )}
        <Link
          to="#"
          onClick={sendMsg}
          className={`${
            formData.message.length === 0 && 'pointer_disabled'
          } btn button`}>
          Send
        </Link>
      </form>
      {error !== '' && (
        <div className="mt-2 mb-2 text-center">
          <p className="text-danger">{error}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.Contact.error,
  success: state.Contact.contactConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  sendMsg: (data) => dispatch(SendContactMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
