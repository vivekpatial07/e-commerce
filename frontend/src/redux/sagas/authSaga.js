import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loginSuccess, logoutFailure, logoutSuccess, signupSuccess } from '../actionCreators/authCreators'

export function* signupSaga(data) {
  yield console.log(data, 'signup')
  
  const response = yield axios.post('/ecomm/users/signup', data.payload)
  console.log(response)
  try {
    yield put(signupSuccess())
    localStorage.setItem('userInfo', JSON.stringify(response.data))
  } catch (error) {
    console.log(error,'error')
  }
}


export function* loginSaga(data) {
  yield console.log(data, 'login')

  const response = yield axios.post('/ecomm/users/login', data.payload)
  console.log(response)
  try {
    yield put(loginSuccess())
    localStorage.setItem('userInfo', JSON.stringify(response.data))
  } catch(error) {
    console.log(error,'error')
  }
}

export function* logoutSaga() {
  //later use localstorage.clearall////i guess
  try {
    yield put(logoutSuccess())    
    yield localStorage.removeItem('userInfo')
  } catch (error) {
    yield put(logoutFailure())    
  }
}