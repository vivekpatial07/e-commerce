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

export const fetchMerchProdInit = () => ({
  type: merchantActions.FETCH_MERCH_PROD_INIT
})

export const fetchMerchProdFail = () => ({
  type: merchantActions.FETCH_MERCH_PROD_FAIL
})

export const fetchMerchProdSuccess = (data) => ({
  type: merchantActions.FETCH_MERCH_PROD_SUCCESS,
  payload: data
})