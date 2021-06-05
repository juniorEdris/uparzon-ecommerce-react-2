import { UserID } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  ADD_TO_BASKET_REQUEST,
  ADD_TO_BASKET_SUCCESS,
  ADD_TO_BASKET_ERROR,
  REMOVE_FROM_BASKET,
  BASKET_STATUS_SUCCESS,
  BASKET_STATUS_COMPLETE,
  ADD_TO_SERVER_BASKET_SUCCESS,
  LOCAL_BASKET_MSG,
} from '../Types';

const addProdBasketRequest = (product) => ({
  type: ADD_TO_BASKET_REQUEST,
  payload: {},
});
const addProdServerBasketSuccess = (res) => {
  return {
    type: ADD_TO_SERVER_BASKET_SUCCESS,
    status: res.type,
    message: res.message,
  };
};
const addProdBasketSuccess = (product) => ({
  type: ADD_TO_BASKET_SUCCESS,
  payload: { product },
});
const addProdLocalBasketMsg = (res) => ({
  type: LOCAL_BASKET_MSG,
  status: res.type,
  message: res.message,
});
const addProdBasketError = (error) => ({
  type: ADD_TO_BASKET_ERROR,
  payload: error,
});
const removeProdBasket = (product) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: { product },
  };
};
const productStatusSuccess = (message) => ({
  type: BASKET_STATUS_SUCCESS,
  message,
  status: true,
});
const productStatusComplete = () => ({
  type: BASKET_STATUS_COMPLETE,
  status: false,
});

export const AddBasketProd =
  (product, quantity) => async (dispatch, getState) => {
    const user = localStorage.getItem('user_id');
    // return action if its null
    if (product === null) return;
    if (!user) {
      let cartItems = getState().Basket.localBasket.slice();
      let exist = false;
      cartItems.forEach((x) => {
        if (x.product_id === product.product_id) {
          exist = true;
          x.price = product.price;
          x.total_quantity = product.total_quantity;
          x.unit_prices_id = product.unit_prices_id;
          dispatch(
            addProdLocalBasketMsg({
              type: true,
              message: 'Product Added To Cart Successfully..',
            })
          );
          setTimeout(() => {
            dispatch(productStatusComplete());
          }, 3000);
        }
      });
      if (!exist) {
        cartItems.push(product);
        dispatch(
          addProdLocalBasketMsg({
            type: true,
            message: 'Product Added To Cart Successfully..',
          })
        );
        setTimeout(() => {
          dispatch(productStatusComplete());
        }, 3000);
      }
      dispatch(addProdBasketSuccess(cartItems));
      localStorage.setItem('Cart List', JSON.stringify(cartItems));
    } else {
      dispatch(addProdBasketRequest());
      await API()
        .post(
          `${ENDPOINTS.ADDTOBASKET}?product_id=${product.product_id}&unit_price_id=${product.unit_prices_id}&total_quantity=${product.total_quantity}`
        )
        .then((res) => {
          dispatch(addProdServerBasketSuccess(res.data));
          dispatch(productStatusSuccess());
          setTimeout(() => {
            dispatch(productStatusComplete());
          }, 3000);
        })
        .catch((error) => console.log(error.Response));
    }
  };

export const RemoveBasketProd = (product) => async (dispatch, getState) => {
  const user = localStorage.getItem('user_id');
  if (!user) {
    let cartItems = getState()
      .Basket.localBasket.slice()
      .filter((x) => x.product_id !== product.product_id);
    dispatch(
      addProdLocalBasketMsg({
        type: true,
        message: 'Product Removed From Cart Successfully..',
      })
    );
    setTimeout(() => {
      dispatch(productStatusComplete());
    }, 3000);
    dispatch(removeProdBasket(cartItems));
    localStorage.setItem('Cart List', JSON.stringify(cartItems));
  } else {
    await API()
      .delete(`${ENDPOINTS.DELETEFROMBASKET}${product.id}`)
      .then((res) => {
        dispatch(removeProdBasket(res.message));
      })
      .catch((err) => console.log(err));
  }
};

export const updateCartItem = (product) => async (dispatch, getState) => {
  const {
    product_id,
    cart_id,
    name,
    photo,
    price,
    total_quantity,
    unit_prices_id,
  } = product;

  dispatch(addProdBasketRequest());
  const user = localStorage.getItem('user_id');
  if (!user) {
    let cartItems = getState().Basket.localBasket.slice();
    const exist = cartItems.slice().filter((x) => x.product_id === product_id);
    if (!exist) {
      dispatch(
        addProdLocalBasketMsg({
          type: true,
          message: 'Product Does not exist',
        })
      );
      // dispatch(productStatusSuccess('Already Exist in cart'));
      setTimeout(() => {
        dispatch(productStatusComplete());
      }, 3000);
      return;
    }
    cartItems.forEach((x) => {
      if (x.product_id === product_id) {
        x.price = price;
        x.total_quantity = total_quantity;
        x.unit_prices_id = unit_prices_id;
        dispatch(
          addProdLocalBasketMsg({
            type: true,
            message: 'Cart Updated Successfully.',
          })
        );
        // dispatch(productStatusSuccess('Already Exist in cart'));
        setTimeout(() => {
          dispatch(productStatusComplete());
        }, 3000);
      }
    });
    dispatch(addProdBasketSuccess(cartItems));
    localStorage.setItem('Cart List', JSON.stringify(cartItems));
  } else {
    await API()
      .post(
        `${ENDPOINTS.CART_UPDATE}${cart_id}?unit_price_id=${unit_prices_id}&total_quantity=${total_quantity}`
      )
      .then((res) => {
        if (res.data.message) {
          dispatch(addProdServerBasketSuccess({ ...res.data, type: true }));
          dispatch(productStatusSuccess());
          setTimeout(() => {
            dispatch(productStatusComplete());
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  }
};
export const guestCartItem = (array) => async (dispatch, getState) => {
  dispatch(addProdBasketRequest());
  let Data = [];
  let cartItems = getState().Basket.localBasket.slice();
  cartItems.forEach((e) => {
    const item = {
      product_id: e.product_id,
      total_quantity:e.total_quantity,
      unit_price_id:e.unit_prices_id,
    }
    Data.push(item)
  })
  const arr = JSON.stringify(Object.assign([], Data))    
  if (Data.length > 0) {
    await API()
      .post(`${ENDPOINTS.CART_GUEST_CART}`
        ,
        {
          guest_carts: JSON.parse(arr)
        }
      )
      .then((res) => {
        if (res.data.type) {
          dispatch(addProdServerBasketSuccess({ ...res.data, type: true }));
          dispatch(productStatusSuccess());
          setTimeout(() => {
            dispatch(productStatusComplete());
          }, 3000);
          localStorage.setItem('Cart List', JSON.stringify([]))
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
    // console.log(arr,'basket');

  } else {
    return
  }
};
