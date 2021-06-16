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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.428"
                  height="18.337"
                  viewBox="0 0 19.428 18.337">
                  <path
                    id="Icon_material-dashboard"
                    data-name="Icon material-dashboard"
                    d="M4.5,14.687h8.635V4.5H4.5Zm0,8.15h8.635V16.725H4.5Zm10.794,0h8.635V12.65H15.294Zm0-18.337v6.112h8.635V4.5Z"
                    transform="translate(-4.5 -4.5)"
                    fill={props.tab === 'dashboard' ? '#13A7B1' : '#272727'}
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className={props.tab === 'order' && 'active'}>
              <Link to="#" onClick={() => props.setTab('order')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.76"
                  height="21.394"
                  viewBox="0 0 21.76 21.394">
                  <path
                    id="Icon_material-add-shopping-cart"
                    data-name="Icon material-add-shopping-cart"
                    d="M12.294,9.65h2.159V6.594H17.69V4.556H14.452V1.5H12.294V4.556H9.055V6.594h3.238ZM7.976,18.819a2.04,2.04,0,1,0,0,4.075,2.041,2.041,0,1,0,0-4.075Zm10.794,0a2.041,2.041,0,1,0,2.159,2.037A2.1,2.1,0,0,0,18.77,18.819ZM8.16,15.508l.032-.122.971-1.661H17.2a2.171,2.171,0,0,0,1.889-1.049L23.26,5.534l-1.878-.978h-.011L20.184,6.594,17.2,11.687H9.628l-.14-.275L7.069,6.594,6.044,4.556,5.029,2.519H1.5V4.556H3.659l3.886,7.732-1.457,2.5a1.884,1.884,0,0,0-.27.978A2.107,2.107,0,0,0,7.976,17.8H20.928V15.762H8.429A.267.267,0,0,1,8.16,15.508Z"
                    transform="translate(-1.5 -1.5)"
                    fill={props.tab === 'order' ? '#13A7B1' : '#272727'}
                  />
                </svg>
                My Order
              </Link>
            </li>
            <li className={props.tab === 'wishlist' && 'active'}>
              <Link to="#" onClick={() => props.setTab('wishlist')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.587"
                  height="18.694"
                  viewBox="0 0 21.587 18.694">
                  <path
                    id="Icon_material-favorite-border"
                    data-name="Icon material-favorite-border"
                    d="M18.651,4.5a6.627,6.627,0,0,0-4.857,2.129A6.627,6.627,0,0,0,8.936,4.5,5.721,5.721,0,0,0,3,10.1c0,3.851,3.67,6.989,9.228,11.756l1.565,1.335,1.565-1.345c5.559-4.758,9.228-7.9,9.228-11.746A5.721,5.721,0,0,0,18.651,4.5ZM13.9,20.341l-.108.1-.108-.1C8.548,15.951,5.159,13.047,5.159,10.1A3.59,3.59,0,0,1,8.936,6.537a4.231,4.231,0,0,1,3.853,2.4h2.018a4.2,4.2,0,0,1,3.843-2.4A3.59,3.59,0,0,1,22.428,10.1C22.428,13.047,19.039,15.951,13.9,20.341Z"
                    transform="translate(-3 -4.5)"
                    fill={props.tab === 'wishlist' ? '#13A7B1' : '#272727'}
                  />
                </svg>{' '}
                My Wishlist
              </Link>
            </li>
            <li className={props.tab === 'profile' && 'active'}>
              <Link to="#" onClick={() => props.setTab('profile')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.154"
                  height="20.202"
                  viewBox="0 0 19.154 20.202">
                  <path
                    id="Icon_awesome-user-alt"
                    data-name="Icon awesome-user-alt"
                    d="M9.577,11.364a5.542,5.542,0,0,0,5.387-5.682A5.542,5.542,0,0,0,9.577,0,5.542,5.542,0,0,0,4.19,5.682,5.542,5.542,0,0,0,9.577,11.364Zm4.789,1.263H12.3a6.206,6.206,0,0,1-5.454,0H4.789A4.924,4.924,0,0,0,0,17.677v.631A1.847,1.847,0,0,0,1.8,20.2H17.358a1.847,1.847,0,0,0,1.8-1.894v-.631A4.924,4.924,0,0,0,14.366,12.626Z"
                    fill={props.tab === 'profile' ? '#13A7B1' : '#272727'}
                  />
                </svg>
                Profile
              </Link>
            </li>
            <li className={props.tab === 'change pass' && 'active'}>
              <Link to="#" onClick={() => props.setTab('change pass')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.267"
                  height="24.45"
                  viewBox="0 0 21.267 24.45">
                  <path
                    id="Icon_awesome-unlock-alt"
                    data-name="Icon awesome-unlock-alt"
                    d="M18.989,12.225H7.216V7.3a3.418,3.418,0,1,1,6.836-.043v.764a1.14,1.14,0,0,0,1.139,1.146H16.71a1.14,1.14,0,0,0,1.139-1.146V7.259A7.216,7.216,0,1,0,3.418,7.33v4.895H2.279A2.286,2.286,0,0,0,0,14.517v7.641A2.286,2.286,0,0,0,2.279,24.45h16.71a2.286,2.286,0,0,0,2.279-2.292V14.517A2.286,2.286,0,0,0,18.989,12.225Zm-6.456,7.259a1.9,1.9,0,1,1-3.8,0V17.191a1.9,1.9,0,1,1,3.8,0Z"
                    transform="translate(0 0)"
                    fill={props.tab === 'change pass' ? '#13A7B1' : '#272727'}
                  />
                </svg>
                Change Password
              </Link>
            </li>
            <li className="logout">
              <Link to="#" onClick={logOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.154"
                  height="17.677"
                  viewBox="0 0 19.154 17.677">
                  <path
                    id="Icon_open-account-logout"
                    data-name="Icon open-account-logout"
                    d="M11.971,0V2.525H2.394V15.152h9.577v2.525H0V0Zm2.394,5.051,4.789,3.788-4.789,3.788V10.1H4.789V7.576h9.577Z"
                    fill="#272727"
                  />
                </svg>
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
