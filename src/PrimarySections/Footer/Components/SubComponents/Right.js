import { Link } from 'react-router-dom';

const Right = (props) => {
  return (
    <div className="col-md-6">
      <div className="row no-gutters">
        <div className="col-4">
          <h5 className="footer_heading">Quick Links</h5>
          <ul className="footer_list">
            <li>
              <Link to="/privacy-policy">Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms &#38; Condition</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ's</Link>
            </li>
            <li>
              <Link to="/return-policy">return policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">cookie policy</Link>
            </li>
            <li>
              <Link to="/purchasing-policy">purchasing policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 className="footer_heading">Information</h5>
          <ul className="footer_list">
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">privacy policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">terms &#38; conditions</Link>
            </li>
            <li>
              <Link to="/contact-us">contact us</Link>
            </li>
            <li>
              <Link to="#" onClick={(e)=>e.preventDefault()}>site map</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 className="footer_heading">Customer Care</h5>
          <ul className="footer_list">
            <li>
              <Link to="/login">my account</Link>
            </li>
            <li>
              <Link to="#" onClick={(e)=>e.preventDefault()}>track your order</Link>
            </li>
            <li>
              <Link to="#" onClick={(e)=>e.preventDefault()}>customer service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Right;
