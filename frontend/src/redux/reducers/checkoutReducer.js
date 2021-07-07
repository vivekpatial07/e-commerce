
import { checkoutActions } from "../actionTypes"

const checkoutState = {
  address: {},
  addressLoader: false,
  addressRedirect: false,
  paymentIntentLoader: false,
  clientSecretKey: null,
  secretKeyFetched: false,
  currentAddress:{},
  checkAddressLoader: false
}

export const checkoutReducer = (state=checkoutState, action) => {
  switch(action.type) {
    
    case checkoutActions.SET_ADDRESS_INITIATE:
      return {
        ...state,
        addressLoader: true
      }

    case checkoutActions.SET_ADDRESS_SUCCESS:
      return {
        ...state,
        addressLoader: false,
        address: action.payload,
        addressRedirect: true
      }
    
    case checkoutActions.FETCH_ADDRESS_INITIATE:
      return{
        ...state,
        addressLoader: true,
      }

    case checkoutActions.FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        addressLoader: false,
        address: action.payload
      }

    case checkoutActions.FETCH_PAYMENT_INTENT_INITIATE:
      return {
        ...state,
        paymentIntentLoader: true,
        secretKeyFetched: false
      }
    
    case checkoutActions.FETCH_PAYMENT_INTENT_SUCCESS:
      return {
          ...state,
          paymentIntentLoader: false,
          clientSecretKey: action.payload,
          secretKeyFetched: true
      }

    case checkoutActions.CHECK_ADDRESS_INIT:
      return {
        ...state,
        checkAddressLoader: true,
        currentAddress: {}
      }

    case checkoutActions.CHECK_ADDRESS_SUCC:
      return {
        ...state,
        checkAddressLoader: false,
        currentAddress: action.payload
      }

    default:
      return {
      ...state
      }
  }
}

