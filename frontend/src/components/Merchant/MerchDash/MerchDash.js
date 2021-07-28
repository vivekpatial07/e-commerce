import React, { useEffect, useState } from 'react'
import MerchNav from '../MerchNav/MerchNav'
import MerchSideBar from '../MerchSideBar/MerchSideBar'
import YourProds from '../YourProds/YourProds'
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

  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = { animation: "outAnimation 510ms ease-in" };



  const toggleSideBar = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <div>
      {/* Nav */}
      <MerchNav onClick={toggleSideBar}/>
      {/* Main */}
      {/* apply routing here afterwards */}
      <YourProds />

      {shouldRenderChild &&
       <MerchSideBar animate={showSideBar ? mountedStyle : unmountedStyle}/>
        }
    </div>
  )
}

export default MerchDash
