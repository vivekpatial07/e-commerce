import { createSelector } from 'reselect'

export const checkoutData = createSelector(
  state => state.checkout,
  checkoutState => {
    const {
      address,
      addressLoader,
      addressRedirect,
      currentAddress,
      checkAddressLoader
    } = checkoutState
    return {
      address,
      addressLoader,
      addressRedirect,
      currentAddress,
      checkAddressLoader
    }
  }
)

export const paymentData = createSelector(
  state => state.checkout,
  checkoutState => {
    const {
      paymentIntentLoader,
      clientSecretKey,
      secretKeyFetched,

    } = checkoutState
    return {
      paymentIntentLoader,
      clientSecretKey,
      secretKeyFetched
    }
  }
)
