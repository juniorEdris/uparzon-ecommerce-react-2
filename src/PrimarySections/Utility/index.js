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
          parseInt(item.price * item?.total_quantity) + amount, 
        0
      )
    : basket?.reduce(
        (amount, item) =>
          parseInt(item?.price * item?.total_quantity) + amount,
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
export const rewardCash= (amount)=> amount.reduce((a, b) => a + b * 50 /100, 0)