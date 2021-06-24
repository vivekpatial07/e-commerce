import { cartActions } from "../actionTypes"

export const getCartItemsInitiate = () => {
  return {
    type: cartActions.GET_CART_ITEMS_INITIATE,
  }
}


export const getCartItemsSuccess = (data) => {
  console.log(data)
  return {
    type: cartActions.GET_CART_ITEMS_SUCCESS,
    payload: data
  }
}