import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function HamBurger(props) {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.style.overflow = sidebar ? 'hidden' : '';
  }, [sidebar]);
  return (
    <div className="ham-burger">
      <Link to="#" onClick={() => setSidebar(true)}>
        <span></span>
        <span></span>
        <span></span>
      </Link>

      <div className="sidebar d-md-none">
        <div className={`sidebar_route ${!sidebar && 'd-none'}`}>
          <div className="cross">
            <span
              class="lnr lnr-cross"
              onClick={() => setSidebar(false)}></span>
          </div>
          <ul className="sidebar_route_list">
            <li>
              <Link to="/" onClick={() => setSidebar(false)}>
                {/* <img
                  className="hamburger_icon"
                  src="./assets/svg/icons/home.svg"
                  alt="myaccount icon"
                /> */}
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/search-medicine">Shop</Link>
            </li> */}
            <li>
              <Link to="/contact-us" onClick={() => setSidebar(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setSidebar(false)}>
                Blogs
              </Link>
            </li>
            {!props.user ? (
              <li>
                <Link to="/login" onClick={() => setSidebar(false)}>
                  {/* <img
                    className="hamburger_icon"
                    src="./assets/svg/icons/login.svg"
                    alt="myaccount icon"
                  /> */}
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/dashboard" onClick={() => setSidebar(false)}>
                  {/* <img
                    className="hamburger_icon"
                    src="./assets/svg/icons/dashboard.svg"
                    alt="myaccount icon"
                  /> */}
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/wishlist" onClick={() => setSidebar(false)}>
                {/* <img
                  className="hamburger_icon"
                  src="./assets/svg/icons/nav-wishlist.svg"
                  alt="wishlist icon"
                /> */}
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {sidebar && (
        <div
          className="responsive_backdrop top-0 d-md-none"
          onClick={() => {
            setSidebar(false);
          }}></div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HamBurger);
