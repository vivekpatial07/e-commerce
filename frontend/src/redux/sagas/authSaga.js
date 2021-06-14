import axios from 'axios'
import { loginSuccess, signupSuccess } from '../actionCreators/authCreators'

export function* signupSaga(data) {
  yield console.log(data, 'signup')
  
  const response = yield axios.post('http://localhost:7000/ecomm/users/signup', data.payload)
  console.log(response)
  try {
    yield signupSuccess()
    localStorage.setItem('userInfo', JSON.stringify(response.data))
  } catch (error) {
    console.log(error,'error')
  }
}


export function* loginSaga(data) {
  yield console.log(data, 'login')

  const response = yield axios.post('http://localhost:7000/ecomm/users/login', data.payload)
  console.log(response)
  try {
    yield loginSuccess()
    localStorage.setItem('userInfo', JSON.stringify(response.data))
  } catch(error) {
    console.log(error,'error')
  }
}