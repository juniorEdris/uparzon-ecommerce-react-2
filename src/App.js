import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './PrimarySections/Header';
import NoRoutes from './NoRoutes';
import Home from './Home';
import './responsive.css';
import BackToTop from './PrimarySections/SectionUtils/BackToTop';
import Footer from './PrimarySections/Footer';
import ProductDetails from './ProductDetails';
import UserEntry from './MyAccount/UserActivity/index';
import Dashboard from './MyAccount/Dashboard/Dashboard';
import PrescriptionUpload from './PrescriptionUpload/PrescriptionUpload';
import AboutUs from './AboutUs/AboutUs';
import CartIcon from './PrimarySections/CartIcon/CartIcon';
import ContactUs from './ContactUs/ContactUs';
// import { User } from './PrimarySections/Utility';
import CheckOut from './CheckOut/CheckOut';
import OrderInformation from './OrderInformation/OrderInformation';
import { connect } from 'react-redux';
import { getCartItems } from './Redux/Action/CartProductsAction';
import { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import WishList from './Wishlist/Wishlist';
import OrderNotification from './OrderNotify/OrderNotification';
import BlogDetails from './BlogDetails';

// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  GetHomeCategories,
  GetHomeContents,
} from './Redux/Action/HomeProductsAction';
import { getUserInfo } from './Redux/Action/GetUserInfoAction';
import { getOrderList } from './Redux/Action/OrderListAction';
import NeccessaryProducts from './NeccessaryProducts/NeccessaryPage';
import SingleCompanyProducts from './CompanyProducts/CompanyProducts';
import CampaignProducts from './CampaignProducts';
import CategoryBasedProducts from './CategoryBasedProducts/CategoryBasedProducts';
import OtherBrands from './OtherBrands/OtherBrands';
import { CopyRight } from './CopyRight/CopyRight';
import OrderCancel from './OrderNotify/OrderCancel';
import CategorySidebar from './PrimarySections/Header/Components/SubComponents/CategorySidebar';
import Search from './SearchMedicine/Search';
import { demoAll } from './Redux/Action/WishListAction';
import Shop from './Shop';
import UparzonEntry from './MyAccount/UserActivity/Components/Uparzon_entry';
import Campaign from './Campaigns';
import PrivacyPage from './Other/PrivacyPage';

function App(props) {
  const [nextPage, setNextPage] = useState('/dashboard');
  const [categoryBar, setCategoryBar] = useState(false);
  const [categoryID, setCategoryID] = useState(1);
  const [categoryName, setCategoryName] = useState('');
  const loginSuccessPageRedirectTo = (path) => {
    setNextPage(path);
  };
  const [cart, setCart] = useState(false);
  useEffect(() => {
    props.getHomeContents();
    props.getHomeCategories();
    //  props.demo();
    // props.User && props.getOrderList();
  }, []);
  // useEffect(() => {
  //   document.body.style.overflow = categoryBar ? 'hidden' : '';
  // }, [categoryBar]);
  return (
    <Router>
      <div className="App">
        <Header
          categoryBar={categoryBar}
          setCategoryBar={setCategoryBar}
          cart={cart}
          setCart={setCart}
        />
        {/* <CategorySidebar
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          categoryBar={categoryBar}
          setCategoryBar={setCategoryBar}
          categoryID={categoryID}
          setCategoryID={setCategoryID}
        /> */}
        <Switch>
          <Route exact path="/">
            <Home
              loginSuccessPageRedirectTo={loginSuccessPageRedirectTo}
              categoryID={categoryID}
              setCategoryID={setCategoryID}
            />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          {/* <Route path="/search-medicines">
            <Search />
          </Route> */}
          <Route path="/productdetails">
            <ProductDetails />
          </Route>
          <Route path="/updatecartproduct" component={ProductDetails} />
          <Route path="/single-brand" component={SingleCompanyProducts} />
          <Route path="/login">
            {/* <UserEntry pathRedirect={nextPage} /> */}
            {!props.User ? (
              <UparzonEntry pathRedirect={nextPage} />
            ) : (
              <Redirect to="/dashboard" />
            )}
          </Route>
          <Route path="/campaign">
            <Campaign />
          </Route>
          <Route path="/dashboard">
            {!props.User ? <Redirect to="/login" /> : <Dashboard />}
          </Route>
          <Route path="/campaign-products" component={CampaignProducts} />
          <Route path="/privacy-policy" component={PrivacyPage} />
          <Route path="/category-products">
            <CategoryBasedProducts
            // setCategoryID={setCategoryID}
            // categoryName={categoryName}
            // setCategoryName={setCategoryName}
            />
          </Route>
          {/* <Route path="/updatecartproduct" component={ProductDetails} />
          <Route path="/otherbrands" component={OtherBrands} />
          <Route path="/single-blog" component={BlogDetails} />
          <Route path="/upload-prescription">
            {!props.User ? <Redirect to="/login" /> : <PrescriptionUpload />}
          </Route>
          <Route path="/more-medicines" component={NeccessaryProducts} />
          <Route path="/blog-details" component={BlogDetails} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/check-out">
            {!props.User ? <Redirect to="/login" /> : <CheckOut />}
          </Route> */}
          {/* <Route path="/order-info" component={OrderInformation} /> */}
          {/* <Route path="/blog" component={Blog} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/ordersuccess" component={OrderNotification} /> */}
          {/* <Route path="/ordercancel" component={OrderCancel} /> */}
          <Route exact path="*" component={NoRoutes} />
        </Switch>
        <CartIcon
          loginSuccessPageRedirectTo={loginSuccessPageRedirectTo}
          cart={cart}
          setCart={setCart}
        />
        <BackToTop />
        <Footer />
        <CopyRight />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  User: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({
  getHomeContents: () => dispatch(GetHomeContents()),
  getHomeCategories: () => dispatch(GetHomeCategories()),
  getUserInfo: () => dispatch(getUserInfo()),
  getOrderList: () => dispatch(getOrderList()),
  demo: () => dispatch(demoAll()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
