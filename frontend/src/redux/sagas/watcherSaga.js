import { takeLatest } from 'redux-saga/effects'
import { authActions, cartActions, checkoutActions, productActions } from '../actionTypes'
import {
  signupSaga,
  loginSaga,
  logoutSaga
 } from './authSaga'
import { getCartItemsSaga } from './cartSaga'
import { getAllProductsSaga, getSingleProductSaga } from './productSaga'
import { fetchAddressSaga, setAddressSaga } from '../sagas/checkoutSaga'

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

  /*---------------------checkout saga-------------- */
  yield takeLatest(checkoutActions.SET_ADDRESS_INITIATE, setAddressSaga)
  yield takeLatest(checkoutActions.FETCH_ADDRESS_INITIATE, fetchAddressSaga)

}