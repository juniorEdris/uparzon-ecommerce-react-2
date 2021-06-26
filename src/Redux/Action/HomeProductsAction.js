import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
  FETCH_HOME_CATEGORY_ERROR,
  FETCH_HOME_CATEGORY_REQUEST,
  FETCH_HOME_CATEGORY_SUCCESS,
  FETCH_HOME_CHILDCATEGORY_ERROR,
  FETCH_HOME_CHILDCATEGORY_REQUEST,
  FETCH_HOME_CHILDCATEGORY_SUCCESS,
  FETCH_HOME_SUBCATEGORY_ERROR,
  FETCH_HOME_SUBCATEGORY_REQUEST,
  FETCH_HOME_SUBCATEGORY_SUCCESS,
} from '../Types';

const fetchHomeProductsRequest = () => ({
  type: FETCH_HOME_PRODUCTS_REQUEST,
});

const fetchHomeProductsSuccess = (res) => {
  return {
    type: FETCH_HOME_PRODUCTS_SUCCESS,
    banners: res.products.banner,
    // categories: res.uparzon_categories,
    slider: res.home_page_slider,
    allProducts: res.products,
    basePath: res.img_base_path,
    campaigns: res.get_all_campaigns,
  };
};
const fetchHomeProductsError = (error) => ({
  type: FETCH_HOME_PRODUCTS_ERROR,
  error,
});
// CATEGORY,SUBCATEGORY,CHILDCATEGORY
// CATEGORY
const fetchHomeCategoryRequest = () => {
  return {
    type: FETCH_HOME_CATEGORY_REQUEST,
    categories: [],
  };
};
const fetchHomeCategorySuccess = (res) => {
  return {
    type: FETCH_HOME_CATEGORY_SUCCESS,
    categories: res,
  };
};
const fetchHomeCategoryError = () => {
  return {
    type: FETCH_HOME_CATEGORY_ERROR,
    categories: [],
  };
};
// SUBCATEGORY
const fetchHomeSubCategoryRequest = () => {
  return {
    type: FETCH_HOME_SUBCATEGORY_REQUEST,
    subcategories: [],
  };
};
const fetchHomeSubCategorySuccess = (res) => {
  return {
    type: FETCH_HOME_SUBCATEGORY_SUCCESS,
    subcategories: res,
  };
};
const fetchHomeSubCategoryError = (err) => {
  return {
    type: FETCH_HOME_SUBCATEGORY_ERROR,
    subcategories: [],
  };
};
//CHILDCATEGORY
const fetchHomeChildCategoryRequest = () => {
  return {
    type: FETCH_HOME_CHILDCATEGORY_REQUEST,
    childcategories: [],
  };
};
const fetchHomeChildCategorySuccess = (res) => {
  return {
    type: FETCH_HOME_CHILDCATEGORY_SUCCESS,
    childcategories: res,
  };
};
const fetchHomeChildCategoryError = (err) => {
  return {
    type: FETCH_HOME_CHILDCATEGORY_ERROR,
    childcategories: [],
  };
};

// ACTIONS
export const GetHomeContents = () => async (dispatch) => {
  dispatch(fetchHomeProductsRequest());
  await API()
    .get(ENDPOINTS.HOMEPRODUCT)
    .then((res) => {
      dispatch(fetchHomeProductsSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeProductsError(error));
    });
};

// CATEGORY,SUBCATEGORY,CHILDCATEGORY ACTIONS
export const GetHomeCategories =
  (category_id, subcategory_id) => async (dispatch) => {
    dispatch(fetchHomeCategoryRequest());
    await API()
      .post(ENDPOINTS.CATEGORIES)
      .then((res) => {
        dispatch(fetchHomeCategorySuccess(res.data.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchHomeCategoryError(error));
      });
  };
export const GetHomeSubCategories = (category_id) => async (dispatch) => {
  dispatch(fetchHomeSubCategoryRequest());
  await API()
    .post(`${ENDPOINTS.CATEGORIES}?category_id=${category_id}`)
    .then((res) => {
      dispatch(fetchHomeSubCategorySuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeSubCategoryError(error));
    });
};
export const GetHomeChildCategories = (subcategory_id) => async (dispatch) => {
  dispatch(fetchHomeChildCategoryRequest());
  await API()
    .post(`${ENDPOINTS.CATEGORIES}?subcategory_id=${subcategory_id}`)
    .then((res) => {
      dispatch(fetchHomeChildCategorySuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeChildCategoryError(error));
    });
};
