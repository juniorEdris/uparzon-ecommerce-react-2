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
        <div className="dash_nav_list">
          <ul>
            <li className={props.tab === 'dashboard' && 'active'}>
              <Link to="#" onClick={() => props.setTab('dashboard')}>
                <span class="fas fa-square-full"></span> Dashboard
              </Link>
            </li>
            <li className={props.tab === 'account' && 'active'}>
              <Link to="#" onClick={() => props.setTab('account')}>
                <span class="fas fa-square-full"></span> My Order
              </Link>
            </li>
            <li className={props.tab === 'order' && 'active'}>
              <Link to="#" onClick={() => props.setTab('order')}>
                <span class="fas fa-square-full"></span> My Wishlist
              </Link>
            </li>
            <li className={props.tab === 'profile' && 'active'}>
              <Link to="#" onClick={() => props.setTab('profile')}>
                <span class="fas fa-square-full"></span> Profile
              </Link>
            </li>
            <li className={props.tab === 'change pass' && 'active'}>
              <Link to="#" onClick={() => props.setTab('change pass')}>
                <span class="fas fa-square-full"></span> Change Password
              </Link>
            </li>
            <li className="logout">
              <Link to="#" onClick={logOut}>
                <span class="fas fa-square-full"></span> Log out
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
