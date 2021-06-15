import { takeLatest } from 'redux-saga/effects'
import { authActions } from '../actionTypes'
import {
  signupSaga,
  loginSaga,
  logoutSaga
 } from './authSaga'

export default function* watcherSaga() {
  yield takeLatest(authActions.SIGNUPINITIATE, signupSaga)
  yield takeLatest(authActions.LOGININITIATE, loginSaga)
  yield takeLatest(authActions.LOGOUTINITIATE, logoutSaga)
}