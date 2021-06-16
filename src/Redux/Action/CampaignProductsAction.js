import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  CAMPAIGN_PRODUCTS_REQUEST,
  CAMPAIGN_PRODUCTS_SUCCESS,
  CAMPAIGN_PRODUCTS_ERROR,
  FILTER_CAMPAIGN_PRODUCTS,
} from '../Types';

const fetchCampaignRequest = () => ({
  type: CAMPAIGN_PRODUCTS_REQUEST,
});

const fetchCampaignSuccess = (res) => {
  return {
    type: CAMPAIGN_PRODUCTS_SUCCESS,
    results: res.data,
    // pages: res.meta,
  };
};
const fetchCampaignError = (error) => ({
  type: CAMPAIGN_PRODUCTS_ERROR,
  error,
});

export const GetCampaignResults = (data) => async (dispatch) => {
  const { id, category, subcategory, childcategory, page } = data;
  dispatch(fetchCampaignRequest());
  await API()
    .get(`${ENDPOINTS.CAMPAIGN_PRODUCTS}?campaign_category_id=${id}`)
    .then((res) => {
      dispatch(fetchCampaignSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchCampaignError(error));
    });
};

const filterProducts = (product, price) => {
  return {
    type: FILTER_CAMPAIGN_PRODUCTS,
    product,
  };
};

export const getCampaignSortedProducts = (data) => (dispatch, getState) => {
  // console.log(data);
  const sortedProds = getState().CampaignProducts?.campaignProducts?.slice();
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
