import React from 'react';
import { useLocation } from 'react-router-dom';

// Currency Formatting
export const currToFixed = (x) => Number.parseFloat(x).toFixed(2);
// make HTML element renderable
export const renderDiv = (rawHTML) =>
  React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });
export const renderSpan = (rawHTML) =>
  React.createElement('span', { dangerouslySetInnerHTML: { __html: rawHTML } });
export const renderDivAttr = (rawHTML) => {
  <div
    dangerouslySetInnerHTML={{
      __html: rawHTML,
    }}></div>;
};

// Get Url parameters
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Short the alphabets
export const Truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};
// export const Truncate = (str, n) => {
//   return str?.length > n ? str.substr(0, n - 1) + '....' : str;
// };

export const getCartProdSubTotal = (basket, user) =>
  user
    ? basket?.reduce(
        (amount, item) =>
          Number(item.price * item?.total_quantity) + amount, 
        0
      )
    : basket?.reduce(
        (amount, item) =>
          Number(item?.unit_price * item?.total_quantity) + amount,
        0
      );

export const UserToken = () => localStorage.getItem('user_token');
export const UserID = () => localStorage.getItem('user_id');

export const groupBy = function (xs, key) {
  if (xs === null) {
    return;
  } else {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
};

// total delivery
export const total_deli_charge = (array)=>array.reduce((a, b) => a + b, 0)

// Reward Cash Back Adjust Amount
// export const rewardCash= (amount)=> amount.reduce((a, b) => a + b * 50 /100, 0)
export const rewardCash = (amount) => amount.reduce((a, b) => a + b / 2, 0)

// GET CAMPAIGN PRICES (USED IN CAMPAIGN CART COMPONENT)
export const get_singleProd_campaign_price = (array) => {
  let compaign_price = 0;
  if (
    array?.campaign_category !== null &&
    array?.campaign_category &&
    array?.campaign_category.status === 1
  ) {
    if (array.campaign_category.price_in_amount) {
      compaign_price =
        Number(array.price) -
        Number(array.campaign_category.price_in_amount);
    } else if (array.campaign_category.price_in_percentage) {
      compaign_price =
        Number(array.price) -
        (Number(array.campaign_category.price_in_percentage) *
          Number(array.price)) /
          100;
    }
  }
  return compaign_price
}
export const get_singleProd_campaign_price_count = (array) => {
  let compaign_price = 0;
  if (
    array?.campaign_category !== null &&
    array?.campaign_category &&
    array?.campaign_category.status === 1
  ) {
    if (array.campaign_category.price_in_amount) {
      compaign_price =
        Number(array.price) -
        Number(array.campaign_category.price_in_amount);
    } else if (array.campaign_category.price_in_percentage) {
      compaign_price =
        Number(array.price) -
        (Number(array.campaign_category.price_in_percentage) *
          Number(array.price)) /
          100;
    }
  }
  return compaign_price * array.total_quantity
}
export const get_wish_singleProd_campaign_price_count = (array) => {
  console.log(array);
  let compaign_price = 0;
  if (
    array?.campaign_category !== null &&
    array?.campaign_category &&
    array?.campaign_category.status === 1
  ) {
    if (array.campaign_category.price_in_amount) {
      compaign_price =
        Number(array.price) -
        Number(array.campaign_category.price_in_amount);
    } else if (array.campaign_category.price_in_percentage) {
      compaign_price =
        Number(array.price) -
        (Number(array.campaign_category.price_in_percentage) *
          Number(array.price)) /
          100;
    }
  } else {
    compaign_price = Number(array.price) * array.total_quantity
  }
  return compaign_price
}