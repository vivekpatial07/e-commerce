import { takeLatest } from 'redux-saga/effects'
import { authActions, cartActions, productActions } from '../actionTypes'
import {
  signupSaga,
  loginSaga,
  logoutSaga
 } from './authSaga'
import { getCartItemsSaga } from './cartSaga'
import { getAllProductsSaga, getSingleProductSaga } from './productSaga'

export default function* watcherSaga() {
  /*----------------------auth saga--------------------*/ 
  yield takeLatest(authActions.SIGNUPINITIATE, signupSaga)
  yield takeLatest(authActions.LOGININITIATE, loginSaga)
  yield takeLatest(authActions.LOGOUTINITIATE, logoutSaga)

  /*--------------------product saga--------------------*/ 
  yield takeLatest(productActions.GET_ALL_PRODUCTS_INITIATE, getAllProductsSaga)
  yield takeLatest(productActions.GET_SINGLE_PRODUCT_INITIATE, getSingleProductSaga)

  /*--------------------cart saga--------------------*/ 
  yield takeLatest(cartActions.GET_CART_ITEMS_INITIATE, getCartItemsSaga)

}