import { takeLatest } from 'redux-saga/effects'
import { authActions, productActions } from '../actionTypes'
import {
  signupSaga,
  loginSaga,
  logoutSaga
 } from './authSaga'
import { getAllProductsSaga } from './productSaga'

export default function* watcherSaga() {
  /*----------------------auth saga--------------------*/ 
  yield takeLatest(authActions.SIGNUPINITIATE, signupSaga)
  yield takeLatest(authActions.LOGININITIATE, loginSaga)
  yield takeLatest(authActions.LOGOUTINITIATE, logoutSaga)

  /*--------------------product saga--------------------*/ 
  yield takeLatest(productActions.GET_ALL_PRODUCTS_INITIATE, getAllProductsSaga)
}