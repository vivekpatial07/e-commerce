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

const singleProductState = {
  singleProductLoader: false,
  product: {}
}

export const singleProductReducer = (state=singleProductState, action) => {
  switch(action.type) {
    
    case productActions.GET_SINGLE_PRODUCT_INITIATE:
      return {
        ...state,
        singleProductLoader: true
      }

    case productActions.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProductLoader: false,
        product: action.payload
      }
    
    case productActions.GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        singleProductLoader: false
      }
    case productActions.CLEAR_SINGLE_PRODUCT:
      return {
        ...state,
        singleProductLoader: false,
        product: {}
      }
    default:
      return {
      ...state
    }
  }
}

