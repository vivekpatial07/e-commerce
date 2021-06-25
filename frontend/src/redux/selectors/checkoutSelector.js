import { createSelector } from 'reselect'

export const checkoutData = createSelector(
  state => state.checkout,
  checkoutState => {
    const { address, addressLoader } = checkoutState
    return {
      address,
      addressLoader,
    }
  }
)
