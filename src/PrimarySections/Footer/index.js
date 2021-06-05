import React from 'react';
import { connect } from 'react-redux';
import FooterBottom from './Components/FooterBottom';
import FooterLinks from './Components/FooterLinks';
import NewsLetter from './Components/NewsLetter';
import './footer.css';

export const index = (props) => {
  return (
    <div className="footer">
      <NewsLetter />
      <FooterLinks />
      {/* <FooterBottom /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
