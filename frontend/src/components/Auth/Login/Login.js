import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
import LoginSvg from '../../../Assets/AuthAssets/LoginSvg/LoginSvg'
import { loginInitiate } from '../../../redux/actionCreators/AuthCreators/authCreators'
import './Login.css'

const Login = () => {

  const [data, setData] = useState({})
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginInitiate(data))
  }

  return (
    <div className="mainWrapper">
    <div className='loginContainer'>
      <div className="logoWrapper">
        <AuthLogo />
      </div>
      <form>
        <input placeholder='email' onChange={changeHandler} name='email'/>
        <input type='password' placeholder='password' onChange={changeHandler} name='password'/>
        <button className='loginBtn' onClick={submitHandler}>Login</button>
      </form>
    {/* Sign up ? <button>SignUp</button> */}
    </div>
    <div className='svgWrapper'>
      <LoginSvg />
    </div>
    </div>
  )
}

export default Login
