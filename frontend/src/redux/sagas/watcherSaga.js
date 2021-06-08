import { takeLatest } from 'redux-saga/effects'
import { authActions } from '../actionTypes'
import { loginSaga } from './authSaga'

export default function* watcherSaga() {
  yield takeLatest(authActions.SIGNUPINITIATE, loginSaga)
}



////there should be only one action type file