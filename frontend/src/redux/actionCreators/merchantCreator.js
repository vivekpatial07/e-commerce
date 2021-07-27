import { merchantActions } from '../actionTypes'

export const createProdInit = (data ,img) => ({
  type: merchantActions.CREATE_PROD_INITIATE,
  formData: data,
  imageBlob: img
})

export const createProdFail = (data) => ({
  type: merchantActions.CREATE_PROD_FAIL,
  payload: data
})

export const createProdSucc = (data) => ({
  type: merchantActions.CREATE_PROD_SUCCESS,
  payload: data,
})