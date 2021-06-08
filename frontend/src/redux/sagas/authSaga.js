export function* signupSaga(data) {
  yield console.log(data, 'signup')
}
export function* loginSaga(data) {
  yield console.log(data, 'login')
}