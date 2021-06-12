import axios from 'axios'

export function* signupSaga(data) {
  yield console.log(data, 'signup')
  // axios.post()
  const response = yield axios.post('http://localhost:7000/signup', data.payload).then(res=>{
    console.log(res)
  }).catch(err => {
    console.log(err,'catch error')
  })
  try {
    yield console.log('done')
  } catch (error) {
    yield console.log(error,'error')
  }
}
export function* loginSaga(data) {
  yield console.log(data, 'login')
}