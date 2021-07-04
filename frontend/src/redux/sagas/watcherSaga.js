import { takeLatest } from 'redux-saga/effects'
import { AdminActions, authActions, cartActions, checkoutActions, productActions } from '../actionTypes'
import {
  signupSaga,
  loginSaga,
  logoutSaga
 } from './authSaga'
import { getCartItemsSaga } from './cartSaga'
import { getAllProductsSaga, getSingleProductSaga, getTopProdsSaga, rateProdSaga } from './productSaga'
import {
  fetchAddressSaga,
  setAddressSaga,
  fetchPaymentIntentSaga
} from '../sagas/checkoutSaga'
import { fetchAllUsersSaga } from './adminSaga'

export default function* watcherSaga() {
  
  /*----------------------auth saga--------------------*/ 
  yield takeLatest(authActions.SIGNUPINITIATE, signupSaga)
  yield takeLatest(authActions.LOGININITIATE, loginSaga)
  yield takeLatest(authActions.LOGOUTINITIATE, logoutSaga)

  /*--------------------product saga--------------------*/ 
  yield takeLatest(productActions.GET_ALL_PRODUCTS_INITIATE, getAllProductsSaga)
  yield takeLatest(productActions.GET_SINGLE_PRODUCT_INITIATE, getSingleProductSaga)
  yield takeLatest(productActions.GET_TOP_PRODUCTS_INIT, getTopProdsSaga)
  yield takeLatest(productActions.RATE_PRODUCT_INIT, rateProdSaga)

  /*--------------------cart saga--------------------*/ 
  yield takeLatest(cartActions.GET_CART_ITEMS_INITIATE, getCartItemsSaga)

  /*---------------------checkout saga-------------- */
  yield takeLatest(checkoutActions.SET_ADDRESS_INITIATE, setAddressSaga)
  yield takeLatest(checkoutActions.FETCH_ADDRESS_INITIATE, fetchAddressSaga)
  yield takeLatest(checkoutActions.FETCH_PAYMENT_INTENT_INITIATE, fetchPaymentIntentSaga)
  
  /*---------------------checkout saga-------------- */
  yield takeLatest(AdminActions.FETCH_ALL_USERS_INIT, fetchAllUsersSaga)
}