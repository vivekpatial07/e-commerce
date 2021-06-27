import { checkoutActions } from '../actionTypes'

export const setAddressInitiate = (data) => {
  return {
    type: checkoutActions.SET_ADDRESS_INITIATE,
    payload: data
  }
}

export const setAddressSuccess = () => {
  return {
    type: checkoutActions.SET_ADDRESS_SUCCESS,
    
  }
}

export const fetchAddressInitiate = () => {
  return {
    type: checkoutActions.FETCH_ADDRESS_INITIATE
  }
}

export const fetchAddressSuccess = (data) => {
  return {
    type: checkoutActions.FETCH_ADDRESS_SUCCESS,
    payload: data
  }
}

export const fetchPaymentIntentInitiate = (data) => {
  return {
    type: checkoutActions.FETCH_PAYMENT_INTENT_INITIATE,
    payload: data
  }
}

export const fetchPaymentIntentSuccess = (data) => {
  return {
    type: checkoutActions.FETCH_PAYMENT_INTENT_SUCCESS,
    payload: data
  }
}