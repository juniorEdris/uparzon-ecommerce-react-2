import React from 'react';
import { connect } from 'react-redux';

const AboutFooter = (props) => {
  return (
    <div className="about_footer">
      <div className="about_heading mb-2">
        <h1>Our Services</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 order-2 order-md-1">
          <div className="col-12 p-0">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              exercitationem, dolor enim, consequatur fugiat harum quis,
              nesciunt illo voluptates corrupti doloribus unde dignissimos vel
              autem asperiores. Vel cum similique accusantium repellendus rem
              nesciunt eveniet quaerat a, perferendis dolore nisi delectus,
              velit praesentium provident. Dolor expedita est aperiam impedit
              molestias necessitatibus.
            </p>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <h4> 01. Consulting</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquam ut provident sequi quibusdam pariatur delectus.
                </p>
              </div>
              <div className="col-md-6">
                <h4>02. 24/7 Delivery</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquam ut provident sequi quibusdam pariatur delectus.
                </p>
              </div>
              <div className="col-md-6">
                <h4>03. Ambulance</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquam ut provident sequi quibusdam pariatur delectus.
                </p>
              </div>
              <div className="col-md-6">
                <h4>04. Prescription Upload</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquam ut provident sequi quibusdam pariatur delectus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 order-1 order-md-2">
          <div className="">
            <img src="./assets/images/about_us/about_footer_1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutFooter);
