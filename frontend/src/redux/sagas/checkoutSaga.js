import axios from "axios"
import { toast } from 'react-toastify'
import { put } from 'redux-saga/effects'
import {
  fetchAddressSuccess,
  setAddressSuccess,
  fetchPaymentIntentSuccess
} from "../actionCreators/checkoutCreators"

export function* setAddressSaga(data) {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if(user){
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
          }
        }
        const response = yield axios.post('/ecomm/order/addAddress', data.payload, config)
        console.log(response)
        yield put(setAddressSuccess())
        
      } catch (error) {
        console.log(error.response.data)      
      }
    } else {
    localStorage.removeItem('userInfo')
    toast.warning('You need to log in Again', {
      position:'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    // throw new Error()
  }
 
}


export function* fetchAddressSaga() {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  
  if(user) {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
          }
        }
      const response = yield axios.get('/ecomm/order/fetchAddress', config)

        console.log(response.data)
        yield put(fetchAddressSuccess(response.data))
        
      } catch (error) {
        console.log(error.response.data)      
      }
      
      
  }    
}

export function* fetchPaymentIntentSaga(data){

  const items = data.payload
  try {
    const response = yield axios.post('/ecomm/order/pay', items)
    yield put(fetchPaymentIntentSuccess(response.data.clientSecret))
    
  } catch (error) {
    
  }
  //  .then(res=>console.log(x=res.data.clientSecret))

}