import axios from 'axios'
import { put } from 'redux-saga/effects'
import { getAllProductsSuccess, getSingleProductSuccess, getTopProductsSuccess } from '../actionCreators/productCreators'

export function* getAllProductsSaga(data) {
  const response = yield axios.get('/ecomm/products/')
  try {
    yield put(getAllProductsSuccess(response.data))
  } catch (error) {
    console.log(error,'error')
  }
}

export function* getSingleProductSaga(data) {
  const id = data.payload
  const response = yield axios.get(`/ecomm/products/single-product/${id}`)

  try {
    yield put(getSingleProductSuccess(response.data))
  } catch (error) {
    console.log(error, 'error')
  }

}

export function* getTopProdsSaga() {
  try {
    const response = yield axios.get('ecomm/products/top-products')
    yield put(getTopProductsSuccess(response.data))
  
  } catch (error) {
    
  }

}