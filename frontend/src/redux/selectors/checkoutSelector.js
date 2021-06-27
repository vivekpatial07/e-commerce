import { createSelector } from 'reselect'

export const checkoutData = createSelector(
  state => state.checkout,
  checkoutState => {
    const {
      address,
      addressLoader,
      addressRedirect
    } = checkoutState
    return {
      address,
      addressLoader,
      addressRedirect,

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
