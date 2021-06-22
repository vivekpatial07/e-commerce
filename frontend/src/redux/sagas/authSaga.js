import axios from 'axios'
import { put } from 'redux-saga/effects'
import { loginFailure, loginSuccess, logoutFailure, logoutSuccess, signupSuccess } from '../actionCreators/authCreators'
import { toast } from 'react-toastify'


/*---------------------------signup------------------------------- */

export function* signupSaga(data) {

  try {
    const response = yield axios.post('/ecomm/users/signup', data.payload)
    localStorage.setItem('userInfo', JSON.stringify(response.data))
    yield put(signupSuccess())

    toast.success(`Welcome! ${response.data.username}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // progress: ,
    })

  } catch (error) {
    toast.error(error.response.data, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // progress: ,
    });
  }
}

/*---------------------------login------------------------------- */

export function* loginSaga(data) {
  try {
    const response = yield axios.post('/ecomm/users/login', data.payload)
    localStorage.setItem('userInfo', JSON.stringify(response.data))
    yield put(loginSuccess())
  
    toast.success(`Welcome! ${response.data.username}`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // progress: ,
    })
  } catch(error) {
    yield put(loginFailure(error.response.data))
    toast.error(error.response.data, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // progress: ,
        });
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