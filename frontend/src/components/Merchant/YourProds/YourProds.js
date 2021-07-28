import React from 'react'
import SingleProd from './SingleProd/SingleProd'
import './YourProds.css'

const YourProds = () => {
  return (
    <div>
      <header>Your Products</header>
      <hr className='horLine'/>
      <SingleProd />
      <SingleProd />
      <SingleProd />
      <SingleProd />
      <SingleProd />
      <SingleProd />
      <SingleProd />
    </div>
  )
}

export default YourProds
