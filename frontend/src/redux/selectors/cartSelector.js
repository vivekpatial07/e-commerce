import { createSelector } from 'reselect'

export const allCartData = createSelector(
  state => state.cart,
  cartState => {
    const { cartItems, cartItemLoader } = cartState
    return {
      cartItems,
      cartItemLoader,
    }
  }
)
