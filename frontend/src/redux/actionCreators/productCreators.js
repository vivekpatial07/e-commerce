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

export const getTopProductsInit = () => {
  return {
    type: productActions.GET_TOP_PRODUCTS_INIT
  }
}

export const getTopProductsSuccess = (data) => {
  return {
    type: productActions.GET_TOP_PRODUCT_SUCCESS,
    payload: data
  }
}

export const getTopProductsFailure = () => {
  return {
    type: productActions.GET_TOP_PRODUCT_FAILURE
  }
}

export const rateProdInit = (id, rateData) => {
  return {
    type: productActions.RATE_PRODUCT_INIT,
    id,
    rateData
  }
}

export const rateProdSucc = (data) => {
  return {
    type: productActions.RATE_PRODUCT_SUCC,
    paylaod: data
  }
}

export const rateProdFail = (data) => {
  return {
    type: productActions.RATE_PRODUCT_FAIL
  }
}