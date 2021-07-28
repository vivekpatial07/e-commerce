import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import './MerchNav.css'


const MerchNav = () => {

  return (
    <div className='navContainer'>
      <div className='menuPanel'>
        <div style={{fontSize:'32px', color: 'white'}}>A</div>
        <div className='ham-container'>
            <div className='ham'></div>
            <div className='ham'></div>
            <div className='ham'></div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MerchNav)
