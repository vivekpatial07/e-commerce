
import { checkoutActions } from "../actionTypes"

const checkoutState = {
  address: {},
  addressLoader: false,


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
        address: action.payload
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

    default:
      return {
      ...state
    }
  }
}

