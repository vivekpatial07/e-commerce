import axios from 'axios'
import { put } from 'redux-saga/effects'
import { getAllProductsSuccess } from '../actionCreators/productCreators'

export function* getAllProductsSaga(data) {
  console.log('ojl')
  const response = yield axios.get('http://localhost:7000/ecomm/products/')
  try {
    yield put(getAllProductsSuccess(response.data))
  } catch (error) {
    console.log(error,'error')
  }
}