import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GENERIC_PRODUCTS_REQUEST,
  GENERIC_PRODUCTS_SUCCESS,
  GENERIC_PRODUCTS_ERROR,
  FILTER_GENERIC_PRODUCTS,
} from '../Types';

const fetchGenericRequest = () => ({
  type: GENERIC_PRODUCTS_REQUEST,
});

const fetchGenericSuccess = (res) => {
  return {
    type: GENERIC_PRODUCTS_SUCCESS,
    results: res.data,
    pages: res.meta,
  };
};
const fetchGenericError = (error) => ({
  type: GENERIC_PRODUCTS_ERROR,
  error,
});

export const GetGenericResults = (data) => async (dispatch) => {
  const { id, category, subcategory, childcategory, page } = data;
  dispatch(fetchGenericRequest());

  await API()
    .post(
      `${ENDPOINTS.GENERIC_PRODUCTS}?per_page=20&generic_id=${id}&page=${page}`
    )
    .then((res) => {
      dispatch(fetchGenericSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchGenericError(error));
    });
};

const filterProducts = (product, price) => {
  return {
    type: FILTER_GENERIC_PRODUCTS,
    product,
  };
};

export const getGenericSortedProducts = (data) => (dispatch, getState) => {
  // console.log(data);
  const sortedProds = getState().GenericProducts?.genericProducts?.slice();
  // console.log(sortedProds);

  if (data.sortingType === 'price low to high') {
    sortedProds.sort((a, b) =>
      Number(a.unit_prices?.price) > Number(b.unit_prices?.price) ? 1 : -1
    );
  } else if (data.sortingType === 'price high to low') {
    sortedProds.sort((a, b) =>
      Number(a.unit_prices?.price) < Number(b.unit_prices?.price) ? 1 : -1
    );
  } else {
    sortedProds.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch(filterProducts(sortedProds, data.sortingType));
};
