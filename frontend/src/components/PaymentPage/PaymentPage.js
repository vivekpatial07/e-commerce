import React, { useEffect } from 'react'
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
import axios from 'axios'
import './PaymentPage.css'

const PaymentPage = () => {
  const { cartItems } = useSelector(allCartData)
  // const { address, addressLoader } = useSelector(checkoutData)
  const dispatch = useDispatch()
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

// let x
//   const fetchPayIntent = async() => {
//     await axios.post('/ecomm/order/pay', {cartItems}).then(res=>console.log(x=res.data.clientSecret))
//     const payload = await stripe.confirmCardPayment(x, {
//       payment_method: {
//         card: elements.getElement(CardElement)
//       }
//     })
  // }

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
      console.log(payload)
    }
  }

  return (
    <div>
      <h1>Pyament Page</h1>
      <form onSubmit={handleSubmit}>
        <CardElement id='card-element' options={cardStyle} onChange={handleCardChange}/>
        <button> Pay Now </button>
      </form>

    </div>
  )
}

export default PaymentPage
