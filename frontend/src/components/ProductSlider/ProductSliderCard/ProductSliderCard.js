import React from 'react'
import './ProductSliderCard.css'

const ProductSliderCard = ({ image, title }) => {
  // let trimmedTitle = title.substring(0,40)
  let trimmedTitle = title.split(' ')
  trimmedTitle.length = 5
  trimmedTitle.join(' ')

  return (
    <div className='cardContainer'>
      <div className='prodImgWrapper'>
        <img src={image} alt='slider-img'/>
        <div style={{wordBreak: 'break-all', color: 'grey'}}>{trimmedTitle}</div>
      </div>
    </div>
  )
}

export default ProductSliderCard
