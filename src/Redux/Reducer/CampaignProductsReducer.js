import {
  CAMPAIGN_PRODUCTS_REQUEST,
  CAMPAIGN_PRODUCTS_SUCCESS,
  CAMPAIGN_PRODUCTS_ERROR,
  FILTER_CAMPAIGN_PRODUCTS,
} from '../Types';
import { initialState } from '../Store/Store';

export const CampaignProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMPAIGN_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        campaignProducts: [],
        campaignPages: [],
      };
    case CAMPAIGN_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        campaignProducts: action.results,
        campaignPages: action.pages,
      };
    case CAMPAIGN_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        campaignProducts: [],
        campaignPages: [],
      };
    case FILTER_CAMPAIGN_PRODUCTS:
      return {
        ...state,
        campaignProducts: action.products,
      };
    default:
      return state;
  }
};
