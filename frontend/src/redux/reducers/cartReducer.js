
import { cartActions } from "../actionTypes"

const cartState = {
  cartItems: [],
  cartItemLoader: false

}

export const cartReducer = (state=cartState, action) => {
  switch(action.type) {
    
    case cartActions.GET_CART_ITEMS_INITIATE:
      return {
        ...state,
        cartItemLoader: true
      }

    case cartActions.GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItemLoader: false,
        cartItems: action.payload
      }
    
    case cartActions.GET_CART_ITEMS_FAILURE:
      return {
        ...state,
        cartItemLoader: false
      }
    // case cartActions.CLEAR_SINGLE_PRODUCT:
    //   return {
    //     ...state,
    //     cartItemLoader: false,
    //     product: {}
    // }
    default:
      return {
      ...state
    }
  }
}

