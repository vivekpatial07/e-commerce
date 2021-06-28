import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { getCartItemsInitiate } from '../../redux/actionCreators/cartCreators'
import { fetchAddressInitiate, fetchPaymentIntentInitiate } from '../../redux/actionCreators/checkoutCreators'
import { allCartData } from '../../redux/selectors/cartSelector'
import { checkoutData, paymentData } from '../../redux/selectors/checkoutSelector'
import { useHistory } from 'react-router-dom'
import './PaymentPage.css'

const PaymentPage = () => {
  const [paymentInt, setPaymentInt] = useState(null) 
  // const { address, addressLoader } = useSelector(checkoutData)
  const history = useHistory()
  const dispatch = useDispatch()
  const { cartItems } = useSelector(allCartData)

  const { paymentIntentLoader, clientSecretKey, secretKeyFetched } = useSelector(paymentData)

  const stripe = useStripe()
  const elements = useElements()
  // console.log(address)
  // console.log(addressLoader)

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  useEffect(() => {
    dispatch(getCartItemsInitiate())
    dispatch(fetchAddressInitiate())
  }, [dispatch])
  
  //not able to dispatch this in prev useEffect (its running contitnuously)
  useEffect(() => {
    dispatch(fetchPaymentIntentInitiate(cartItems))
  },[dispatch, cartItems])

  useEffect(() => {

    if(paymentInt) {
      history.push('/ecommerce/placeOrder/pay/orderPlaced')
    }

  }, [history, paymentInt])

  const handleCardChange = (e) => {
    console.log(e)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    if(secretKeyFetched) {
      const payload = await stripe.confirmCardPayment(clientSecretKey, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      setPaymentInt(payload)
    }
  }

  return (
    <div className='paymentWrapper'>
      <h1>Pyament Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='paymentFormWrapper'>
          <CardElement id='card-element' options={cardStyle} onChange={handleCardChange}/>
          <button> Pay Now </button>
        </div>
      </form>

    </div>
  )
}

export default PaymentPage
