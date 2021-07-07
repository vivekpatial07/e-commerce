import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAddressInit, setAddressInitiate } from '../../redux/actionCreators/checkoutCreators'
import { requiredValidate, numericValidate } from '../../utils/validations'
import './AddressPage.css'
import { useHistory } from 'react-router-dom'
import { checkoutData } from '../../redux/selectors/checkoutSelector'
import CommonLoader from '../CommonLoader/CommonLoader'

const AddressPage = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [address, setAddress] = useState({})
  const [errors, setErrors] = useState({})
  
  const dispatch = useDispatch()
  const { addressRedirect, checkAddressLoader, currentAddress } = useSelector(checkoutData)

  const history = useHistory()
  
  useEffect(() => {
    dispatch(checkAddressInit(userInfo._id))
  },[])

  useEffect(()=>{
    if(addressRedirect) {
      history.push('/ecommerce/placeOrder/pay')
    }
  },[])

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
      {checkAddressLoader ? <CommonLoader height={70} width={70} /> : 
        currentAddress ? <div>
          <h3>Current Address</h3>
          <div className='currentAddress'>
            <div>{currentAddress.mainAddress}, {currentAddress.landmark}, {currentAddress.city}</div>
            <div>{currentAddress.state}, {currentAddress.pincode}</div>
            <button onClick={() => history.push('/ecommerce/placeOrder/pay')} className='proceedBtn'>Proceed</button>
          </div>
        </div> :
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
}
    </div>
  )
}

export default AddressPage
