import axios from 'axios'
// import { put } from 'redux-saga/effects'
// import { toast } from 'react-toastify'

export function* createProdSaga(data) {
  const {formData, imageBlob} = data
  try {
    const response  = yield axios.post('/merchant/addProduct', {formData, imageBlob})
    console.log(response)
  } catch (error) {
    console.log(error.message)
  }
}