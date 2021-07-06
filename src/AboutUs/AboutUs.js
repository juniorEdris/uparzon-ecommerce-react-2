import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './aboutus.css';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';

const AboutUs = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="about_page policy_wrapper">
      <div className="about_header">
        <h1 className='text-center'>About Us</h1>
      </div>
      <div className="container mt-3">
        <p>
        Uparzon is an online marketplace to serve customers with the most effective quality product at very cheap price within the market. Uparzon is selling sort of Consumer electronics, household appliance, kitchen appliance, Office Stationary, latest smart phones, Camera, Computing & accessories and trendy products like clothes, cosmetics, shoes, makeup, Grocery items and more.
        </p>
        <p>
        Behind these we've got enlisted over 50 local Brands.
        </p>
        <p>
        Uparzon ensures fastest delivery with a wonderful customer experience thus provides the foremost efficient delivery service through own logistics in order that customers get a hassle-free product delivery at their doorstep.
        </p>
        <p>
        Uparzon also offers easy return policy within 7days after receiving the merchandise and various payment methods including Cash on delivery, Online Payments, and bKash with all of our products. We do our best to fulfill our client’s expectation in quality standards and service through continuous improvement and customer interaction. Our creative teams work with highly skilled craftsmen to confirm that our clients get only the best quality product.
        </p>
        <p>
        Our Mission is to be the most effective online marketplace in Bangladesh in terms of the best customer service. And it ensures strengthening retailers' channels for the customers through better service and quality products satisfying the ultimate goal of the Seller and customer. Our efforts to make sure better customer satisfaction, to significantly enhance the whole system of interaction while retailers efficiently communicate with individual purchasers with purchasing-friendly features.
        </p>
        <p>
        Our Vision is to be a marketplace chief of this industry in Bangladesh.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
