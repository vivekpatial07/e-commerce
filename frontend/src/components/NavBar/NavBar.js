import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logoutInitiate } from '../../redux/actionCreators/authCreators'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'


const NavBar = ({history}) => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const dispatch = useDispatch()
  // const [cartCounter, setCartCounter] = useState()

  const cartItems = JSON.parse(localStorage.getItem('cartInfo'))

  const num = cartItems && cartItems.reduce((acc, curr) => acc+curr.qty,0)

  // const [showDrop, setShowDrop] = useState(false)
  // const logoutHandler = () => {
  //   dispatch(logoutInitiate())
  // }

  // const drop = (
  //   <div className='dropdown'>
  //     hi
  //   </div>
  // )

  return (
    <div className='nav-wrapper'>
      <div className='logo' onClick={()=>history.push('/')}>
        A
      </div>
      <div className='left-items'>
        <div 
          // onClick={() => setShowDrop(!showDrop)}
          onClick={() => history.push('/ecommerce/user')}
        >
          {user?.username
            ? (
              <div>
                <FontAwesomeIcon icon={faUser}/>
                {/* {showDrop && drop} */}
               </div>
            )
            : <div onClick={()=>history.push('/login')}>Login</div>}
        </div>
        <div onClick={()=> history.push('/ecommerce/cart')}>
          <FontAwesomeIcon style={{position:'relative'}} icon={faShoppingCart}/><span style={{position: 'absolute', top:'10px'}}>{num}</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavBar)
