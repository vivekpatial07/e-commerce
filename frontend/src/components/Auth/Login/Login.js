import React from 'react'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
import LoginSvg from '../../../Assets/AuthAssets/LoginSvg/LoginSvg'
import './Login.css'

const Login = () => {
  return (
    <div className="mainWrapper">
    <div className='loginContainer'>
      <div className="logoWrapper">
        <AuthLogo />
      </div>
      <form>
        <input placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button className='loginBtn'>Login</button>
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
