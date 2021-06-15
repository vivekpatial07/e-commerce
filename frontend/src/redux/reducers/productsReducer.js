import { productActions } from '../actionTypes'

const productsState = {
  productsLoader: false,
  allProducts: []
}

export const productsReducer = (state=productsState, action) => {
  switch(action.type) {
    
    case productActions.GET_ALL_PRODUCTS_INITIATE:
      return {
        ...state,
        productsLoader: true
      }

    case productActions.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoader: false,
        allProducts: action.payload
      }
    
    case productActions.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        productsLoader: false
      }

    default:
      return {
      ...state
    }
  }
}

