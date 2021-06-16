import React from 'react'
import './ProductCard.css'
import CommonButton from '../BuyButton/CommonButton'
import { withRouter } from 'react-router-dom'
const ProductCard = ({
  id,
  image,
  title,
  category,
  price,
  history,
  match: { path }
}) => {

  const buyNowHandler = (e) => {
    console.log('buy now')
  }

  const addToCartHandler = (e) => {
    console.log('add to card')
  }

  const goToProduct = () => {
    history.push(`${path}/product/${category}/${id}`)
  }

  return (
    <div className='card-wrapper'>
      
      <div className='image-wrapper' onClick={goToProduct}>
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

export default withRouter(ProductCard)
