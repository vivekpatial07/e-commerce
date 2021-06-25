import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
// import LoginSvg from '../../../Assets/AuthAssets/LoginSvg/LoginSvg'
import { loginInitiate } from '../../../redux/actionCreators/authCreators'
import './Login.css'
import { requiredValidate, emailValid, createPasswordValidate } from '../../../utils/validations'

const Login = (props) => {

  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  
  const dispatch = useDispatch()
  const { redirect } = useSelector(state => state.login)

  const changeHandler = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  console.log(props)
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

  useEffect(()=>{
    if(redirect) {
      // props.history.goBack()
      props.history.push('/ecommerce')
    }
  },[props.history, redirect])

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
