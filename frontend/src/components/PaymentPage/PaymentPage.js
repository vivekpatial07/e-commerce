import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemsInitiate } from '../../redux/actionCreators/cartCreators'
import { fetchAddressInitiate } from '../../redux/actionCreators/checkoutCreators'
import { allCartData } from '../../redux/selectors/cartSelector'
import { checkoutData } from '../../redux/selectors/checkoutSelector'
import './PaymentPage.css'

const PaymentPage = () => {
  const { cartItems } = useSelector(allCartData)
  const { address, addressLoader } = useSelector(checkoutData)
  const dispatch = useDispatch()

  console.log(address)
  console.log(addressLoader)
  useEffect(() => {
    dispatch(getCartItemsInitiate())
    dispatch(fetchAddressInitiate())
  }, [dispatch])

  return (
    <div>
      <h1>Pyament Page</h1>
    </div>
  )
}

export default PaymentPage
