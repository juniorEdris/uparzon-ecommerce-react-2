import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { AddBasketReducer } from '../Reducer/BasketReducer';
import { CartItemsReducer } from '../Reducer/CartProductsReducerReducer';
import { HomeContentReducer } from '../Reducer/HomeProductReducer';
import { ProductDetailsReducer } from '../Reducer/ProductDetailsReducer';
import { SearchReducer } from '../Reducer/SearchReducer';
import { CartUpdateIDReducer } from '../Reducer/CartUpdateIDReducer';
import { setUserReducer } from '../Reducer/UserReducer';
import { WishlistReducer } from '../Reducer/WishlistReducer';
import { UserInfoReducer } from '../Reducer/GetUserInfoReducer';
import { ContactPageMsg } from '../Reducer/ContactMessageReducer';
import { PrescriptionUploadReducer } from '../Reducer/PrescriptionUploadReducer';
import { PlaceOrderReducer } from '../Reducer/PlaceOrderReducer';
import { SingleCompanyProducts } from '../Reducer/SingleBrandReducer';
import { OrderListsReducer } from '../Reducer/OrderListReducer';
import { NeccessaryProdReducer } from '../Reducer/NeccessaryProductsReducer';
import { GenericProductsReducer } from '../Reducer/GenericProductsReducer';
import { BlogListReducer } from '../Reducer/BlogListReducer';
import { SingleBlogReducer } from '../Reducer/SingleBlogReducer';
import { SingleOrderReducer } from '../Reducer/SingleOrderReducer';
import { OtherBrandsReducer } from '../Reducer/OtherBrandsReducer';
import { CategoryBasedProdReducer } from '../Reducer/CategoryBasedProdReducer';
import { AccountInfoReducer } from '../Reducer/AccountInfoReducer';
export const initialState = {
  loading: true,
  pages: [],
  //HomeContents
  categories: [],
  homeSlider: [],
  homeBrands: [],
  neccessaryProducts: [],
  popularProducts: [],
  commonProducts: [],
  homeBlogs: [],
  homeVideo: {},
  healthCareBanner: [],
  hometoplargeBannner: {},
  homebtmLargeBanner: {},
  homeappBanner: {},
  homebrandBtmBanner: {},
  primaryProducts: [],
  // Neccessary Page states
  neccessaryResults: [],
  neccessaryCategories: [],
  neccessary_pages: [],
  //   Single Product details
  productDetails: {},
  suggestions: [],
  //   Search Results
  searchResults: [],
  search_pages: [],
  //   Basket state
  basket: [],
  localBasket: localStorage.getItem('Cart List')
    ? JSON.parse(localStorage.getItem('Cart List'))
    : [],
  basketmsg: '',
  basketstatus: '',
  tabStatus: false,
  //   CartItems state
  // cartItems: [],
  cart_update_id: '',
  // login/logout/user states
  user: localStorage.getItem('user_token')
    ? localStorage.getItem('user_token')
    : null,
  logOutRequest: false,
  //   Wishlist state
  wishlist: [],
  localWishlist: localStorage.getItem('Wish List')
    ? JSON.parse(localStorage.getItem('Wish List'))
    : [],
  wishlistMsg: '',
  wishlistStatus: '',
  //   UserInfo state
  deliveryTypes: [],
  info: {},
  userAreas: [],
  status: '',
  // Contact Page states
  error: { name: '', email: '', subject: '', message: '', prescription: '' },
  contactConfirm: '',
  sendMsgReq: false,
  // Prescription states
  uploadloading: false,
  prescriptionSuccess: '',
  prescriptionStatus: false,
  // Place Orders states
  placingOrder: false,
  place_order_msg: '',
  order_error: '',
  // Single Company Products
  company_products: [],
  company_categories: [],
  company_pages: [],
  // Order Lists
  orders: [],
  pendingOrders: [],
  completedOrders: [],
  onDeliverOrders: [],
  order_pages: [],
  // Generic Products States
  genericProducts: [],
  genericPages: [],
  // Blog List state
  blogLists: [],
  blogsPage: [],
  // Single Blog state
  singleBlog: {},
  // Single Order state
  orderDetails: {},
  // Other Brands State
  otherBrands: [],
  otherBrandsPage: [],
  otherBrandsCat: [],
  // Category Based State
  categoryProducts: [],
  categoryLists: [],
  categorypages: [],
  // Account Info state
  storeInfoloading: false,
  storeInfoStatus: '',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    HomeContent: HomeContentReducer,
    NeccessaryContent: NeccessaryProdReducer,
    ProductDetails: ProductDetailsReducer,
    Search: SearchReducer,
    Basket: AddBasketReducer,
    CartItems: CartItemsReducer,
    CartID: CartUpdateIDReducer,
    User: setUserReducer,
    Wishlist: WishlistReducer,
    UserInfo: UserInfoReducer,
    Contact: ContactPageMsg,
    Prescription: PrescriptionUploadReducer,
    PlaceOrder: PlaceOrderReducer,
    SingleCompany: SingleCompanyProducts,
    OrderList: OrderListsReducer,
    GenericProducts: GenericProductsReducer,
    AllBlogs: BlogListReducer,
    SingleBlog: SingleBlogReducer,
    SingleOrder: SingleOrderReducer,
    OtherBrands: OtherBrandsReducer,
    CategoryProducts: CategoryBasedProdReducer,
    AccountInfo: AccountInfoReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
