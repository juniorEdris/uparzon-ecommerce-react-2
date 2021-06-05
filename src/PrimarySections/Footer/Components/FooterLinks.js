import React from 'react';
import { Link } from 'react-router-dom';

function FooterLinks() {
  return (
    <div className="footer_links">
      <div className="container">
        <div className="row">
          <div className="links_container col-6 col-md-3">
            <h5>Get to Know Us</h5>
            <ul className="links">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/">careers</Link>
              </li>
              <li>
                <Link to="/blog">blogs</Link>
              </li>
              <li>
                <Link to="/">amazon cares</Link>
              </li>
              <li>
                <Link to="/">gift a smile</Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-md-3">
            <h5>Connect with Us</h5>
            <ul className="links">
              <li>
                <Link to="/contact-us">contact us</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">gift a smile</Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-md-3">
            <h5>Make Money With Us</h5>
            <ul className="links">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/">careers</Link>
              </li>
              <li>
                <Link to="/">press releases</Link>
              </li>
              <li>
                <Link to="/">uparzon cares</Link>
              </li>
              <li>
                <Link to="/">gift a smile</Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-md-3">
            <h5>Let us Help You</h5>
            <ul className="links">
              <li>
                <Link to="/">COVID-19 and uparzon</Link>
              </li>
              <li>
                <Link to="/dashboard">your Account</Link>
              </li>
              <li>
                <Link to="/">Return Centre</Link>
              </li>
              <li>
                <Link to="/">100% Purchase Protection</Link>
              </li>
              <li>
                <Link to="/">Assistancy</Link>
              </li>
              <li>
                <Link to="/contact-us">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
