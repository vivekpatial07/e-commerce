import axios from 'axios'
import { signupSuccess } from '../actionCreators/authCreators'
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
}