import React from 'react';
import { connect } from 'react-redux';

const ContactDetails = (props) => {
  return (
    <div>
      <div className="row contact_box_wrapper">
        <div className="col-md-4 mb-md-3">
          <div className="contact_box ">
            <div className="contact_box_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="57.93" height="57.93" viewBox="0 0 57.93 57.93">
  <g id="Group_67331" data-name="Group 67331" transform="translate(-61.268)">
    <circle id="Ellipse_1624" data-name="Ellipse 1624" cx="28.965" cy="28.965" r="28.965" transform="translate(61.268)" fill="#15a6b1"/>
    <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M34.8,25.316l-7.837-3.359a1.679,1.679,0,0,0-1.959.483l-3.471,4.24a25.936,25.936,0,0,1-12.4-12.4l4.24-3.471a1.675,1.675,0,0,0,.483-1.959L10.5,1.015A1.691,1.691,0,0,0,8.579.043L1.3,1.722A1.679,1.679,0,0,0,0,3.359,32.464,32.464,0,0,0,32.467,35.826a1.679,1.679,0,0,0,1.637-1.3l1.679-7.277a1.7,1.7,0,0,0-.98-1.931Z" transform="translate(72.69 11.598)" fill="#fff"/>
  </g>
</svg>

              <h4>PHONE</h4>
            </div>
            <div className="contact_box_body">
              <div>Toll Free: +8801610 186 286</div>
              {/* <div>Fax: 111 222 333 555</div> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-md-3">
          <div className="contact_box">
            <div className="contact_box_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="57.93" height="57.93" viewBox="0 0 57.93 57.93">
  <g id="Group_67330" data-name="Group 67330" transform="translate(-59.19)">
    <circle id="Ellipse_1623" data-name="Ellipse 1623" cx="28.965" cy="28.965" r="28.965" transform="translate(59.19)" fill="#15a6b1"/>
    <g id="Icon_ionic-ios-mail-unread" data-name="Icon ionic-ios-mail-unread" transform="translate(69.575 15.063)">
      <path id="Path_21184" data-name="Path 21184" d="M34.317,11.534A4.221,4.221,0,1,1,30.1,7.313,4.221,4.221,0,0,1,34.317,11.534Z" transform="translate(2.266 -7.313)" fill="#fff"/>
      <g id="Group_66930" data-name="Group 66930" transform="translate(0 1.407)">
        <path id="Path_21185" data-name="Path 21185" d="M35.738,16.488a5.86,5.86,0,0,1-1.372-.167L30.2,20.569a.17.17,0,0,0,0,.246l6.622,7.053a1.141,1.141,0,0,1,0,1.618,1.146,1.146,0,0,1-1.618,0l-6.6-7.027a.18.18,0,0,0-.255,0L26.741,24.1a7.081,7.081,0,0,1-5.048,2.128,7.223,7.223,0,0,1-5.153-2.19L14.992,22.46a.18.18,0,0,0-.255,0l-6.6,7.027a1.146,1.146,0,0,1-1.618,0,1.141,1.141,0,0,1,0-1.618l6.622-7.053a.187.187,0,0,0,0-.246L3.674,10.93a.173.173,0,0,0-.3.123V30.339a2.822,2.822,0,0,0,2.814,2.814H37.145a2.822,2.822,0,0,0,2.814-2.814V14.685A5.834,5.834,0,0,1,35.738,16.488Z" transform="translate(-3.375 -7.826)" fill="#fff"/>
        <path id="Path_21186" data-name="Path 21186" d="M29.676,11.252A5.845,5.845,0,0,1,30.4,8.437H5.967a2.746,2.746,0,0,0-1.741.616L18.024,23.1a4.82,4.82,0,0,0,6.877,0l7.079-7.2A5.818,5.818,0,0,1,29.676,11.252Z" transform="translate(-3.162 -8.437)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>

              <h4>EMAIL</h4>
            </div>
            <div className="contact_box_body">
              <div>uparzon@mail.com</div>
              <div>Support@uparzon.com</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 ">
          <div className="contact_box">
            <div className="contact_box_header">
            <svg xmlns="http://www.w3.org/2000/svg" width="57.93" height="57.93" viewBox="0 0 57.93 57.93">
  <g id="Group_67329" data-name="Group 67329" transform="translate(-62.307)">
    <circle id="Ellipse_1622" data-name="Ellipse 1622" cx="28.965" cy="28.965" r="28.965" transform="translate(62.307)" fill="#15a6b1"/>
    <path id="Icon_awesome-location-arrow" data-name="Icon awesome-location-arrow" d="M31.1.246,2.011,13.674a3.392,3.392,0,0,0,1.343,6.49H15.663V32.473a3.392,3.392,0,0,0,6.49,1.343L35.58,4.722A3.491,3.491,0,0,0,31.1.246Z" transform="translate(73.729 11.366)" fill="#fff"/>
  </g>
</svg>

              <h4>ADDRESS</h4>
            </div>
            <div className="contact_box_body">
              <div>RF Zohura Tower (7th Floor), 1401. Shekh Mujib Road, Chowmuhony, Agrabad Chittagong</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
