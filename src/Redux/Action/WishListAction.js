import { UserToken } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  ADD_TO_WISHLIST_ERROR,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_ONLINE_WISHLIST_SUCCESS,
  ADD_TO_LOCAL_WISHLIST_SUCCESS,
  REMOVE_FROM_LOCAL_WISHLIST,
  REMOVE_FROM_ONLINE_WISHLIST,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_ERROR,
  WISHCART_STATUS_SUCCESS,
  WISHCART_STATUS_COMPLETE,
  ADD_TO_WISHCART_MSG,
} from '../Types';
// GET WISHLIST ACTION PROCCESS
const getWishItemRequest = () => ({
  type: GET_WISHLIST_REQUEST,
});
const getWishItemSuccess = (products) => ({
  type: GET_WISHLIST_SUCCESS,
  products,
});
const getWishItemError = (error) => ({
  type: GET_WISHLIST_ERROR,
  error,
});

// ADD WISHLIST ACTION PROCCESS
const addWishItemRequest = () => ({
  type: ADD_TO_WISHLIST_REQUEST,
});

const addWishItemOnlineSuccess = (res) => {
  return {
    type: ADD_TO_ONLINE_WISHLIST_SUCCESS,
    message: res.message,
    status: res.type,
  };
};

const addWishItemLocalSuccess = (product) => ({
  type: ADD_TO_LOCAL_WISHLIST_SUCCESS,
  product,
});
const addWishItemLocalMsg = (message) => {
  return {
    type: ADD_TO_WISHCART_MSG,
    message,
  };
};

const removeProdLocalWish = (product) => ({
  type: REMOVE_FROM_LOCAL_WISHLIST,
  payload: product,
});
const removeProdOnlineWish = (message) => {
  return {
    type: REMOVE_FROM_ONLINE_WISHLIST,
    message,
  };
};
const productStatusSuccess = () => ({
  type: WISHCART_STATUS_SUCCESS,
  status: true,
});
const productStatusComplete = () => ({
  type: WISHCART_STATUS_COMPLETE,
  status: false,
});
const addWishItemError = (error) => ({
  type: ADD_TO_WISHLIST_ERROR,
  error,
});

export const addToWishlistAction = (product) => async (dispatch, getState) => {
  dispatch(addWishItemRequest());
  if (!UserToken()) {
    let wishItems = getState().Wishlist.localWishlist.slice();
    let exist = false;
    wishItems.forEach((x) => {
      if (x.product_id === product.product_id) {
        // dispatch(addWishItemLocalMsg('Already Exist In Wishlist'));
        dispatch(addWishItemOnlineSuccess({message: 'Already Exist In Wishlist',
        status: true}));
        setTimeout(() => {
          dispatch(productStatusComplete());
        }, 3000);
        exist = true;
        console.log('exist',exist);
        return;
      }
    });
    if (!exist) {
      wishItems.push(product);

      // dispatch(addWishItemLocalMsg('Product Added To Wishlist Successfully..'));
      dispatch(addWishItemOnlineSuccess({message: 'Product Added To Wishlist Successfully..',
        status: true}));
      setTimeout(() => {
        dispatch(productStatusComplete());
      }, 3000);
    }
    dispatch(addWishItemLocalSuccess(wishItems));
    localStorage.setItem('Wish List', JSON.stringify(wishItems));
  } else {
    await API()
      .post(
        `${ENDPOINTS.ADD_WISHLIST_ITEM}product_id=${product.product_id}&unit_price_id=${product.unit_price.unit_prices_id}&total_quantity=${product.total_quantity}`
      )
      .then((res) => {
        dispatch(productStatusSuccess());
        dispatch(addWishItemOnlineSuccess(res.data));
        setTimeout(() => {
          dispatch(productStatusComplete());
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        dispatch(addWishItemError(err));
      });
  }
};

export const RemoveWishProd = (product) => async (dispatch, getState) => {
  if (!UserToken()) {
    let wishItems = getState()
      .Wishlist.localWishlist.slice()
      .filter((x) => x.product_id !== product.product_id);
    dispatch(removeProdLocalWish(wishItems));
    localStorage.setItem('Wish List', JSON.stringify(wishItems));
    dispatch(addWishItemOnlineSuccess({message: 'Product Removed From Wishlist Successfully..',
        status: true}));
    setTimeout(() => {
      dispatch(productStatusComplete());
    }, 3000);
  } else {
    await API()
      .delete(`${ENDPOINTS.DELETE_WISHLIST_ITEM}${product.id}`)
      .then((res) => {
        dispatch(removeProdOnlineWish(res.data.message));
      })
      .catch((err) => {
        console.log(err);
        dispatch(addWishItemError(err));
      });
  }
};

export const getWishlistItems = () => async (dispatch) => {
  dispatch(getWishItemRequest());
  await API()
    .get(`${ENDPOINTS.GET_WISHLIST_ITEM}`)
    .then((res) => {
      dispatch(getWishItemSuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getWishItemError(error));
    });
};

export const guestWishItem = (array) => async (dispatch, getState) => {
  let Data = [];
  let wishItems = getState().Wishlist.localWishlist.slice();
  wishItems.forEach((e) => {
    const item = {
      product_id: e.product_id,
      total_quantity:e.total_quantity,
      unit_price_id:e.unit_price.unit_prices_id,
    }
    
    Data.push(item)
  })
  const arr = JSON.stringify(Object.assign([], Data))
  if (Data.length > 0) {
    await API()
      .post(`${ENDPOINTS.WISH_GUEST_CART}`
        ,
        {
            guest_wishlists: JSON.parse(arr)
        }
      ).then((res) => {
    // console.log(arr,'wishlist');
    console.log('guest_wish', res);
        if (res.data.type) {
          dispatch(productStatusSuccess());
          dispatch(addWishItemOnlineSuccess(res.data));
          setTimeout(() => {
            dispatch(productStatusComplete());
          }, 3000);
          localStorage.setItem('Wish List', JSON.stringify([]))
        } else {
          console.log(res.data);
         }
      })
      .catch((err) => {
        console.log(err);
        dispatch(addWishItemError(err));
      });
  } else {
    return
  }
}

export const demoAll = (array) => async (dispatch, getState) => {
 console.log('for every page run'); 
}