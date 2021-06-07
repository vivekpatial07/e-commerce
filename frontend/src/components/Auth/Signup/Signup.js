import React from 'react'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
import SignupSvg from '../../../Assets/AuthAssets/SignupSvg/SignupSvg'
import './Signup.css'
const Signup = () => {
  return (
    <div className='main-wrapper'>
      <div className='signupWrapper'>
        <div className='logoWrapper'>
          <AuthLogo />
        </div>
        <form>
          <input placeholder='username'/>
          <input placeholder='email'/>
          <input type='password' placeholder='password'/>
          <button className='signupBtn'>Sign up</button>
        </form>
      </div>
      <div className='signupSvgWrapper'>
        <SignupSvg />
      </div>
    </div>
  )
}

export default Signup
