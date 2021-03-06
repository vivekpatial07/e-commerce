import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthLogo from '../../../Assets/AuthAssets/AuthLogo/AuthLogo'
// import SignupSvg from '../../../Assets/AuthAssets/SignupSvg/SignupSvg'
import { signupInitiate } from '../../../redux/actionCreators/authCreators'
import './Signup.css'
import { requiredValidate, emailValid, createPasswordValidate } from '../../../utils/validations'

const Signup = ({ history }) => {

  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const { redirect } = useSelector(state => state.signUp)


  const changeHandler = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  
  const submitHandler = async(e) => {
    e.preventDefault()
    
    const {username, email, password} = data

    const errorsObject = {
      username: requiredValidate(username),
      email: requiredValidate(email) || emailValid(email),
      password: requiredValidate(password) || createPasswordValidate(password)
    }

    if (!errorsObject.username && !errorsObject.password && !errorsObject.email) {
      setErrors({})
      await dispatch(signupInitiate({...data}))
      
      if(localStorage.getItem('userInfo')) history.push('/ecommerce')
    
    } else {
      setErrors(errorsObject)
    }

  }
  // const error = Object.entries(errors).map(err=>{
  //   if(err[1]){
  //     return(
  //       <div>
  //         {err[0]} is {err[1]}
  //       </div>
  //     )
  //   }else {
  //     return ""
  //   }
  // })


  useEffect(()=>{
    if(redirect) {
      history.push('/ecommerce')
    }
  },[history, redirect])

  return (
    <div className='main-wrapper'>
      <div className='signupWrapper'>
        <div className='logoWrapper'>
          <AuthLogo />  
        </div>
        {/* <div>{error}</div> */}
        <form>
          <input
            placeholder={errors.username ? errors.username :'username'}
            onChange={changeHandler}
            name='username'
            className={errors.username && 'error'}
          />
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
          <button className='signupBtn' onClick={submitHandler}>Sign up</button>
        </form>
      </div>
      <div className='signupSvgWrapper'>
        {/* <SignupSvg /> */}
      </div>
    </div>
  )
}

export default Signup
