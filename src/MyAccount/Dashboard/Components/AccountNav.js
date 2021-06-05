import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../Redux/Action/UserAction';

const AccountNav = (props) => {
  const logOut = (e) => {
    e.preventDefault();
    props.logOut();
  };
  return (
    <div className="">
      <div className="account_nav">
        <div className="acc_heading">
          <h5>My Account</h5>
        </div>
        <div className="dash_nav_list">
          <ul>
            <li>
              <Link
                to="#"
                className={props.tab === 'dashboard' && 'active'}
                onClick={() => props.setTab('dashboard')}>
                Account Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={props.tab === 'account' && 'active'}
                onClick={() => props.setTab('account')}>
                Account Information
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={props.tab === 'order' && 'active'}
                onClick={() => props.setTab('order')}>
                My Order
              </Link>
            </li>
            <li className="logout">
              <Link to="#" onClick={logOut}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutAction()),
});
export default connect((state) => ({}), mapDispatchToProps)(AccountNav);
