import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logoutInitiate } from '../../redux/actionCreators/authCreators'
import './NavBar.css'

const NavBar = ({history}) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutInitiate())
  }

  return (
    <div className='nav-wrapper'>
      <div className='logo' onClick={()=>history.push('/')}>
        A
      </div>
      <div className='left-items'>
        <div onClick={logoutHandler}>
          {user?.username ? `Welcome! ${user.username}` : 'Login'}
        </div>
        <div>
          Cart
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavBar)
