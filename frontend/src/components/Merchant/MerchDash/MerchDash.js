import React from 'react'
import MerchNav from '../MerchNav/MerchNav'
import YourProds from '../YourProds/YourProds'
import './MerchDash.css'

const MerchDash = () => {
  return (
    <div>
      {/* Nav */}
      <MerchNav />
      {/* Main */}
      {/* apply routing here afterwards */}
      <YourProds />
    </div>
  )
}

export default MerchDash
