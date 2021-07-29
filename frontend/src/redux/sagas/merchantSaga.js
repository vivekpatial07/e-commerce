import axios from 'axios'
import { put } from 'redux-saga/effects'
import { fetchMerchProdSuccess } from '../actionCreators/merchantCreator'
// import { put } from 'redux-saga/effects'
// import { toast } from 'react-toastify'

export function* createProdSaga(data) {
  // const {formData, imageBlob} = data
  const formData = new FormData()
  formData.set('title',data.formData.title)
  formData.set('price',data.formData.price)
  formData.set('category',data.formData.category)
  formData.set('description',data.formData.description)
  formData.set('stockCount',data.formData.stockCount)
  formData.set('image',data.imageBlob)
  try {
    const response  = yield axios.post('/merchant/addProduct', formData)
    console.log(response)
  } catch (error) {
    console.log(error.message)
  }
}

export function* fetchMerchProdSaga() {
  try {
    const response = yield axios.get('/merchant/fetchMerchProducts')
    yield put(fetchMerchProdSuccess(response.data))
  } catch (error) {
    
  }
}