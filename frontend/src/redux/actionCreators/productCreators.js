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

export const getSingleProductInitiate = (data) => {
  return {
    type: productActions.GET_SINGLE_PRODUCT_INITIATE,
    payload: data
  }
}

export const getSingleProductSuccess = (data) => {
  return {
    type: productActions.GET_SINGLE_PRODUCT_SUCCESS,
    payload: data
  }
}

export const getSingleProductFailure = (data) => {
  return {
    type: productActions.GET_SINGLE_PRODUCT_FAILURE,
    payload: data
  }
}

export const clearSingleProduct = () => {
  return {
    type: productActions.CLEAR_SINGLE_PRODUCT
  }
}