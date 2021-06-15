import { productActions } from '../actionTypes'

export const getAllProductsInitiate = () => {
  return {
    type: productActions.GET_ALL_PRODUCTS_INITIATE
  }
}

export const getAllProductsSuccess = (data) => {
  return {
    type: productActions.GET_ALL_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const getAllProductsFailure = () => {
  return {
    type: productActions.GET_ALL_PRODUCTS_FAILURE
  }
}