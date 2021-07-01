import React from 'react'
import './Category.css'
import Clothing from '../../Assets/Images/clothing.png'
import Electronics from '../../Assets/Images/electronics.png'
import Jewel from '../../Assets/Images/jewel.png'

const Category = () => {
  return (
    <div className='categoryWrapper'>
        <img src={Clothing} alt='category'/>
        <img src={Electronics} alt='category'/>
        <img src={Jewel} alt='category'/>
    </div>
  )
}

export default Category
