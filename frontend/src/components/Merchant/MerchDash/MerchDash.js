import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import MerchNav from '../MerchNav/MerchNav'
import MerchSideBar from '../MerchSideBar/MerchSideBar'
import YourProds from '../YourProds/YourProds'
import AddEditProduct from '../AddEditProduct/AddEditProduct'
import './MerchDash.css'

function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false)
  
  useEffect(() => {
    let timeoutId
    if(isMounted && !shouldRender) {
      setShouldRender(true)
    } else if(!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime) 
    }
    return () => clearTimeout(timeoutId)
  }, [isMounted, delayTime, shouldRender])

  return shouldRender
}


const MerchDash = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  const shouldRenderChild = useDelayUnmount(showSideBar, 500)
  const [showModal, setShowModal] = useState(false)

  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 510ms ease-in" };


  const toggleModal = () => {
    setShowModal(prev => !prev)
  }


  const toggleSideBar = (e) => {
    setShowSideBar(!showSideBar)
  }

  return (
    <div>
      {/* Nav */}
      <MerchNav onClick={toggleSideBar}/>
      <button
        className='createProdBtn'
        onClick={toggleModal}
      >
        Create Product <FontAwesomeIcon icon={faPlusSquare}/>
      </button>
      {/* Main */}
      {/* apply routing here afterwards */}
      <YourProds />

      {
        shouldRenderChild && <MerchSideBar animate={showSideBar ? mountedStyle : unmountedStyle}/>
      }

      {showModal && <AddEditProduct showModal={showModal} toggle={toggleModal}/>}
    </div>
  )
}

export default MerchDash
