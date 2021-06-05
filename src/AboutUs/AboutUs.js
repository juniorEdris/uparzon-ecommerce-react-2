import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AboutBody from './Components/AboutBody';
import AboutFooter from './Components/AboutFooter';
import AboutHeader from './Components/AboutHeader';
import './aboutus.css';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';

const AboutUs = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="about_page container-md-fluid">
      <AboutHeader />
      <AboutBody />
      <AboutFooter />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
