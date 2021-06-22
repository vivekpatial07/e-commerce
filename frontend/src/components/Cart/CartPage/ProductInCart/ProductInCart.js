import React, { useEffect } from 'react'
import CounterBtn from '../../../CounterBtn/CounterBtn'
import './ProductInCart.css'

const ProductInCart = ({ product: { _id, qty, image, price, title, category }}) => {

  useEffect(() => {
    console.log('running')
  }, [])


  return (
    <div className='productInCartWrapper'>
      <div className='cartleftInfo'>
        <div><img src={image} alt='product-pic'/></div>
        <div className='productIncartTitle'>{title}</div>
      </div>
      <div className='productInCartCounterWrapper'>
        <div className='productInCartCounter'>
          <CounterBtn btnClass='counterBtn'>-</CounterBtn>
          <input className='productInCartInput' value={qty}/>
          <CounterBtn btnClass='counterBtn' >+</CounterBtn>
        </div>
        <div className='productInCartPrice'>${price}</div>
      </div>
    </div>
  )
}

export default ProductInCart
