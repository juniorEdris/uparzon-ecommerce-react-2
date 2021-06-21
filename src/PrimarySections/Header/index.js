import React, { useEffect, useState } from 'react';
import HeaderTop from './Components/HeaderTop';
import Navigation from './Components/HeaderNav';
import './header.css';
import { connect } from 'react-redux';

function Index(props) {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 300) {
          setStickyNav(true);
        } else {
          setStickyNav(false);
        }
      });
    };
  }, [stickyNav]);
  return (
    <div className={stickyNav && 'header_sticky'}>
      <HeaderTop cart={props.cart} setCart={props.setCart} />
      <Navigation
        categoryBar={props.categoryBar}
        setCategoryBar={props.setCategoryBar}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
