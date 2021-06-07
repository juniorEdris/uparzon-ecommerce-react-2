import { Link } from 'react-router-dom';

const Right = (props) => {
  return (
    <div className="col-md-6">
      <div className="row no-gutters">
        <div className="col-4">
          <h5 className="footer_heading">Quick Links</h5>
          <ul className="footer_list">
            <li>
              <Link to="/">Policy</Link>
            </li>
            <li>
              <Link to="/">Terms & Condition</Link>
            </li>
            <li>
              <Link to="/">Shipping</Link>
            </li>
            <li>
              <Link to="/">Returns</Link>
            </li>
            <li>
              <Link to="/">FAQ's</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 className="footer_heading">Information</h5>
          <ul className="footer_list">
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">delivery information</Link>
            </li>
            <li>
              <Link to="/">privacy policy</Link>
            </li>
            <li>
              <Link to="/">terms and conditions</Link>
            </li>
            <li>
              <Link to="/">contact us</Link>
            </li>
            <li>
              <Link to="/">returns</Link>
            </li>
            <li>
              <Link to="/">site map</Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5 className="footer_heading">Customer Care</h5>
          <ul className="footer_list">
            <li>
              <Link to="/">my account</Link>
            </li>
            <li>
              <Link to="/">track your order</Link>
            </li>
            <li>
              <Link to="/">customer service</Link>
            </li>
            <li>
              <Link to="/">returns / exchange</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">product support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Right;
