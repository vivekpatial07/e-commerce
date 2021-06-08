import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
import SignupSvg from '../../../Assets/AuthAssets/SignupSvg/SignupSvg'
import { signupInitiate } from '../../../redux/actionCreators/AuthCreators/authCreators'
import './Signup.css'

const Signup = () => {

  const [data, setData] = useState({})
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signupInitiate(data))
  }

  return (
    <div className='main-wrapper'>
      <div className='signupWrapper'>
        <div className='logoWrapper'>
          <AuthLogo />
        </div>
        <form>
          <input placeholder='username' onChange={changeHandler} name='username'/>
          <input placeholder='email' onChange={changeHandler} name='email'/>
          <input type='password' placeholder='password' onChange={changeHandler} name='password'/>
          <button className='signupBtn' onClick={submitHandler}>Sign up</button>
        </form>
      </div>
      <div className='signupSvgWrapper'>
        <SignupSvg />
      </div>
    </div>
  )
}

export default Signup
