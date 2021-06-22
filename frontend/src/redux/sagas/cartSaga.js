import axios from 'axios'
import { put } from 'redux-saga/effects'
import { getCartItemsSuccess } from '../actionCreators/cartCreators'

export function* getCartItemsSaga(data) {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  let cartItems = []
  let products = []

  if(user){
    localStorage.removeItem('cartInfo')
    yield console.log('to be done')
  } else {
    cartItems = JSON.parse(localStorage.getItem('cartInfo'))
    const response = yield axios.post('/ecomm/order/cart',cartItems)

    //brute force approach for now

    products = response.data
    products.forEach(prod => {
      cartItems.forEach(itm => {
        if(itm.id===prod._id){
          prod.qty = itm.qty
        }
      })
    })

  }
  try {
    yield put(getCartItemsSuccess(products))
  } catch (error) {
    console.log(error)
  }
}
