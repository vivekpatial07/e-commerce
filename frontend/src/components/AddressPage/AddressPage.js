import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAddressInitiate } from '../../redux/actionCreators/checkoutCreators'
import { requiredValidate, numericValidate } from '../../utils/validations'
import './AddressPage.css'
import { useHistory } from 'react-router-dom'

const AddressPage = () => {
  const [address, setAddress] = useState({})
  const [errors, setErrors] = useState({})
  
  const dispatch = useDispatch()
  const history = useHistory()

  const changeHandler = (e) => {
    const newAddress = { ...address }
    
    newAddress[e.target.name] = e.target.value
    setAddress(newAddress)
  }

  const submitAddress = async(e) => {
    e.preventDefault()
    const { mainAddress, city, state, pincode, landmark } = address

    const errorsObject = {
      mainAddress: requiredValidate(mainAddress),
      city: requiredValidate(city),
      state: requiredValidate(state),
      pincode: requiredValidate(pincode) || numericValidate(pincode),
      landmark: requiredValidate(landmark),
    }

    if(
        !errorsObject.mainAddress &&
        !errorsObject.city &&
        !errorsObject.state &&
        !errorsObject.pincode &&
        !errorsObject.landmark
    ) {
      setErrors({})
      await dispatch(setAddressInitiate({...address}))
      history.push('/ecommerce/placeOrder/pay')
    
    } else {
      setErrors(errorsObject)
    }
  }

  return (
    <div>
      <h1>Address</h1>
        <form>
          <div className='addressWrapper'>
              <input
                className={errors.mainAddress && 'error'}
                name='mainAddress'
                onChange={changeHandler}
                placeholder='H. no./ Building no.'
              />
              <input
                className={errors.city && 'error'}
                name='city'
                onChange={changeHandler}
                placeholder = 'city'
              />
              <input
                className={errors.state && 'error'}
                name='state'
                onChange={changeHandler}
                placeholder='state'
                />
              <input
                className={errors.pincode && 'error'}
                name='pincode'
                onChange={changeHandler}
                placeholder='pincode'
                />
              <input
                className={errors.landmark && 'error'}
                name='landmark'
                onChange={changeHandler}
                placeholder='landmark'
                />
              <button onClick={submitAddress}>Pay Now</button>
          </div>
        </form>
    </div>
  )
}

export default AddressPage
