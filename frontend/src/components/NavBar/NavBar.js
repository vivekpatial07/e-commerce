import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'


const NavBar = ({history}) => {


  // const user = JSON.parse(localStorage.getItem('userInfo'))

  const cartItems = JSON.parse(localStorage.getItem('cartInfo'))

  const num = cartItems && cartItems.reduce((acc, curr) => acc+curr.qty,0)

  return (
    <>
      <div className='nav-wrapper'>
      {/* -------Function Panel------- */}
        <div className='functionPanel'>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} onClick={() => history.push('/ecommerce/user/profile')}/>
          <FontAwesomeIcon icon={faHeart} />
        </div>

      {/* --------Logo and Cart Panel-------- */}
        <div className='logoPanel'>
            <div onClick={()=>history.push('/')}>A</div>
            <div onClick={()=> history.push('/ecommerce/cart')} style={{position: 'relative'}}>
              <FontAwesomeIcon icon={faShoppingCart}/>
              <span style={{position: 'absolute', top:'-10px'}}>{num}</span> 
            </div>
        </div>



      {/* <div className='nav-top'>
        <div className='nav-top-left'>
          <div className='ham-container'>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
          </div>
        <div className='logo' onClick={()=>history.push('/')}>
          A
        </div>
        </div>
        <div className='right-items'>
          <div >
            {user?.username
              ? (
                <div onClick={() => history.push('/ecommerce/user/profile')}>
                  <FontAwesomeIcon icon={faUser}/>
                </div>
              )
              : <div onClick={()=>{
                  history.push('/login')
                }}>Login</div>}
          </div>
        <div onClick={()=> history.push('/ecommerce/cart')}>
          <FontAwesomeIcon style={{position:'relative'}} icon={faShoppingCart}/><span style={{position: 'absolute', top:'10px'}}>{num}</span>
        </div>
      </div>
      </div>
      <div className='nav-bottom'>
        <div className='searchBarWrapper'>
          <input placeholder='search products' className='searchBar'/><span className='searchIcon'><FontAwesomeIcon icon={faSearch} /></span>
        </div>
      </div> */}
      </div>
      <div className='menuPanel'>
        <div style={{fontSize:'20px', color: 'white'}}>Menu</div>
        <div className='ham-container'>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
        </div>
      </div>
    </>
  )
}

export default withRouter(NavBar)
