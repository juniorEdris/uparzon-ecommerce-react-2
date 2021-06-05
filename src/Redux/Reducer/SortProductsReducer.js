import //   FILTER_PRODUCTS,
'../Types';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const filterProducts = (product, price) => {
  return {
    type: FILTER_PRODUCTS,
    product,
  };
};
// const filterProductsBySize = (product, size) => {
//   return {
//     type: FILTER_PRODUCTS_BY_SIZE,
//     shopProduct:
//       size === '' ? product : product.filter((x) => x.size.indexOf(size) >= 0),
//     size,
//   };
// };
// const SortProductsByPrice = (product, price) => {
//   return {
//     type: FILTER_PRODUCTS_BY_PRICE,
//     product,
//     price,
//   };
// };

export const getCompanySortedProducts = (data) => (dispatch) => {
  const sortedProds = data.products.slice();
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
// export const FilterProducts = (products, size) => (dispatch) => {
//   dispatch(filterProductsBySize(products, size));
// };
// export const sortProdsByPrice = (products, sort) => (dispatch) => {
//   const sortedProds = products.slice();
//   if (sort === 'lowestPrice') {
//     sortedProds.sort((a, b) => (a.price > b.price ? 1 : -1));
//   } else if (sort === 'highestPrice') {
//     sortedProds.sort((a, b) => (a.price < b.price ? 1 : -1));
//   } else {
//     sortedProds.sort((a, b) => (a.id > b.id ? 1 : -1));
//   }
//   dispatch(SortProductsByPrice(sortedProds, sort));
// };
