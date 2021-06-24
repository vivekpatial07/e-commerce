import axios from 'axios'
import { toast } from 'react-toastify'
import { put } from 'redux-saga/effects'
import { getCartItemsInitiate, getCartItemsSuccess } from '../actionCreators/cartCreators'


export function* getCartItemsSaga(data) {
  const user = JSON.parse(localStorage.getItem('userInfo'))

  let products = []
  let cartItems = JSON.parse(localStorage.getItem('cartInfo'))

  if(user){

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    }
    try {
      const response = yield axios.post('/ecomm/order/cart/push', JSON.stringify(cartItems), config)
      console.log(response)
      products = response.data
      products.forEach(prod => {
        cartItems.forEach(itm => {
          if(itm.product_id===prod._id){
            prod.qty = itm.qty
          }
        })
      })
      yield put(getCartItemsSuccess(response.data))
      
    } catch (error) {
      console.log(error.response.data)
      localStorage.removeItem('userInfo')
      toast.warning('You need to log in Again', {
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      yield put(getCartItemsInitiate())
      
    }
  } else {
    console.log('if no user')
    //brute force approach for now
    if(cartItems){
      const response = yield axios.post('/ecomm/order/cart',cartItems)
      
      products = response.data
      products.forEach(prod => {
        cartItems.forEach(itm => {
          if(itm.product_id===prod._id){
            prod.qty = itm.qty
          }
        })
      })
    }
    try {
      console.log(products)
      yield put(getCartItemsSuccess(products))
    } catch (error) {
      console.log(error)
    }
  }
}