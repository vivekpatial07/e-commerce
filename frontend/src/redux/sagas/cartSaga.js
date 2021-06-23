import axios from 'axios'
import { toast } from 'react-toastify'
import { put } from 'redux-saga/effects'
import { getCartItemsSuccess } from '../actionCreators/cartCreators'

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
      // localStorage.removeItem('cartInfo')
      
    } catch (error) {
      console.log(error.response.data)
        toast.warning('You need to log in Again', {
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
    yield console.log('to be done')
  } else {
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


// export function* pushCartToDBSaga() {

//   const cartItems = localStorage.getItem('cartInfo')

//   try {
//     const response = axios.post('/ecomm/order/cart', cartI)
//   } catch (error) {
    
//   }

// }