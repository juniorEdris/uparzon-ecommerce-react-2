import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  NECCESSARY_PRODUCTS_REQUEST,
  NECCESSARY_PRODUCTS_SUCCESS,
  NECCESSARY_PRODUCTS_ERROR,
  FILTER_NECCESSARY_PRODUCTS,
} from '../Types';

const fetchNeccessaryRequest = () => ({
  type: NECCESSARY_PRODUCTS_REQUEST,
});

const fetchNeccessarySuccess = (res) => {
  return {
    type: NECCESSARY_PRODUCTS_SUCCESS,
    results: res.products.data,
    categories: res.categories,
    pages: res.products.meta,
  };
};
const fetchNeccessaryError = (error) => ({
  type: NECCESSARY_PRODUCTS_ERROR,
  error,
});
const filterProducts = (product, price) => {
  return {
    type: FILTER_NECCESSARY_PRODUCTS,
    product,
  };
};
export const GetNeccessaryProducts = (data) => async (dispatch) => {
  const { keywords, category_id, subcategory, childcategory, page } = data;
  dispatch(fetchNeccessaryRequest());

  await API()
    .get(
      `${ENDPOINTS.HOMEPRODUCT}?per_page=20&page=${page}&category_id=${category_id}`
    )
    .then((res) => {
      dispatch(fetchNeccessarySuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchNeccessaryError(error));
    });
};

export const getNeccessrySortedProducts = (data) => (dispatch, getState) => {
  const sortedProds = getState().NeccessaryContent.neccessaryResults.slice();

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
