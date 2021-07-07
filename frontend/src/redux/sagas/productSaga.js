import axios from 'axios'
import { put } from 'redux-saga/effects'
import { checkRatedProdInit, checkRatedProdSucc, getAllProductsSuccess, getSingleProductSuccess, getTopProductsSuccess, rateProdSucc } from '../actionCreators/productCreators'
import { toast } from 'react-toastify'

export function* getAllProductsSaga(data) {
  const response = yield axios.get('/ecomm/products/')
  try {
    yield put(getAllProductsSuccess(response.data))
  } catch (error) {
    console.log(error,'error')
  }
}

export function* getSingleProductSaga(data) {
  const id = data.payload
  const response = yield axios.get(`/ecomm/products/single-product/${id}`)

  try {
    yield put(getSingleProductSuccess(response.data))
  } catch (error) {
    console.log(error, 'error')
  }

}

export function* getTopProdsSaga() {
  try {
    const response = yield axios.get('ecomm/products/top-products')
    yield put(getTopProductsSuccess(response.data))
  
  } catch (error) {
   console.log(error)
  }

}

export function* rateProdSaga(data) {
  const ratingData = {
    id: data.id,
    stars: data.rateData.stars,
    review: data.rateData.review,
    userId: data.rateData.userId
  }
  console.log('runin', ratingData)

  try {
    
    const response = yield axios.post(`/ecomm/products/rateProd`, {ratingData})
    // console.log(response,'sdkfl')
    yield put(rateProdSucc(response.data.ratings))
    toast.success('Product Rated!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    yield put(checkRatedProdInit({
      prodId: ratingData.id,
      userId: ratingData.userId
    }))

  } catch (error) {
    console.log('eror')
    console.log(error)
  }
}

 //not waiting for previous dispatch
    // await dispatch(checkRatedProdInit({
    //   prodId: id,
    //   userId: userInfo._id
    // }))
export function* checkRatedProdSaga (data) {
  const prodId = data.payload.prodId
  try {
    const response = yield axios.post(`/ecomm/products/checkRated/${prodId}`, {data:data.payload})
    console.log(response)
    if(response.data.rated === -1){
      yield put(checkRatedProdSucc(false))
    } else {
      yield put(checkRatedProdSucc(true))
    }

  } catch (error) {
    console.log(error,'asfsfjlsjfsad;lfl')
  }
}