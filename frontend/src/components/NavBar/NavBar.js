import React from 'react'
import './NavBar.css'
const NavBar = () => {
  
  const user = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <div className='nav-wrapper'>
      <div className='logo'>
        A
      </div>
      <div className='left-items'>
        <div>
          {user.username ? `Welcome! ${user.username}` : 'Login'}
        </div>
        <div>
          Cart
        </div>
      </div>
    </div>
  )
}

export default NavBar
