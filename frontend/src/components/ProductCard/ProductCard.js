import React from 'react'
import './ProductCard.css'
import CommonButton from '../BuyButton/CommonButton'

const ProductCard = ({
  id,
  image,
  title,
  category,
  description,
  price
}) => {

  const buyNowHandler = (e) => {
    e.stopPropagation()
    console.log('buy now')
  }
  const addToCartHandler = (e) => {
    e.stopPropagation()
    console.log('add to card')
  }

  return (
    <div className='card-wrapper'>
      
      <div className='image-wrapper'>
        <img src={image} alt='product'/>
      </div>
      <div className='card-title'>
        {title}
      </div>
      <div className='card-price'>
        ${price}
      </div> 
      <div className='card-buttons'>
        <CommonButton btnClass='card-add-to-cart' onClick={addToCartHandler}>Add To Cart</CommonButton>
        <CommonButton btnClass='card-buy-now' onClick={buyNowHandler}>Buy Now</CommonButton>
      </div>
    </div>
  )
}

export default ProductCard
