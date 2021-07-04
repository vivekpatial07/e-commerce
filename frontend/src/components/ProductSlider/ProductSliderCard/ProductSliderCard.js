import React from 'react'
import { useHistory } from 'react-router'
import './ProductSliderCard.css'

const ProductSliderCard = ({ image, title, category, id, }) => {
  // let trimmedTitle = title.substring(0,40)
  let trimmedTitle = title.split(' ')
  trimmedTitle.length = 5
  trimmedTitle.join(' ')

  const history = useHistory()

  const goToProduct = () => {
    history.push(`ecommerce/product/${category}/${id}`)
  }

  return (
    <div className='cardContainer' onClick={goToProduct}>
      <div className='prodImgWrapper'>
        <img src={image} alt='slider-img'/>
        <div style={{wordBreak: 'break-all', color: 'grey'}}>{trimmedTitle}</div>
      </div>
    </div>
  )
}

export default ProductSliderCard
