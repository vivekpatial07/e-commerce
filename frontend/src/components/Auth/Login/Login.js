import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
// import LoginSvg from '../../../Assets/AuthAssets/LoginSvg/LoginSvg'
import { loginInitiate } from '../../../redux/actionCreators/AuthCreators/authCreators'
import './Login.css'
import { requiredValidate, emailValid, createPasswordValidate } from '../../../utils/validations'

const Login = () => {

  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  
  const submitHandler = (e) => {
    e.preventDefault()

    const {email, password} = data

    const errorsObject = {
      email: requiredValidate(email) || emailValid(email),
      password: requiredValidate(password) || createPasswordValidate(password)
    }

    if (!errorsObject.password && !errorsObject.email) {
      setErrors({})
      dispatch(loginInitiate(data))
    } else {
      setErrors(errorsObject)
    }

  }

  return (
    <div className="mainWrapper">
    <div className='loginContainer'>
      <div className="logoWrapper">
        <AuthLogo />
      </div>
      <form>
        <input
          placeholder={errors.email ? errors.email :'email'}
          onChange={changeHandler}
          name='email'
          className={errors.email && 'error'}
        />
        <input
          type='password'
          placeholder={errors.password ? errors.password :'password'}
          onChange={changeHandler}
          name='password'
          className={errors.password && 'error'}
        />
        <button className='loginBtn' onClick={submitHandler}>Login</button>
      </form>
    {/* Sign up ? <button>SignUp</button> */}
    </div>
    <div className='svgWrapper'>
      {/* <LoginSvg /> */}
    </div>
    </div>
  )
}

export default Login
