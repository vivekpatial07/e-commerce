import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartItemsInitiate } from '../../../../redux/actionCreators/cartCreators'
import CounterBtn from '../../../CounterBtn/CounterBtn'
import { toast } from 'react-toastify'
import './ProductInCart.css'

const ProductInCart = ({ product: { _id, qty, image, price, title, category }}) => {

  const [quantity, setQuantity] = useState(qty)

  const dispatch = useDispatch()

  const counterHandler = async(e) => {
    const cartItems =  JSON.parse(localStorage.getItem('cartInfo'))

    if(e.target.innerText === '+') {
      setQuantity(quantity+1)
      // dispatch(  )

    if(cartItems) {
      const itmIndex = cartItems.findIndex(itm => itm.product_id===_id)

      if(itmIndex === -1) {
        cartItems.push({id: _id,qty:1})
      } else {
        cartItems[itmIndex].qty+=1 
      }
      console.log(cartItems)
      localStorage.setItem('cartInfo', JSON.stringify(cartItems))
      dispatch(getCartItemsInitiate())

    } else {
      const cartItems = []
      cartItems.push({id:_id, qty:1})
      console.log(cartItems)
    
      
      dispatch(getCartItemsInitiate())
      
     
      localStorage.setItem('cartInfo', JSON.stringify(cartItems))
    }
    toast.success('Product added to Cart!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    } else {
      if(quantity>1) setQuantity(quantity-1)

      if(cartItems) {
        const itmIndex = cartItems.findIndex(itm => itm.product_id===_id)
  
        if(itmIndex !== -1 && cartItems.length > 0 ) {
          if(cartItems[itmIndex].qty === 1) {


          } else {

            
            cartItems[itmIndex].qty-=1 
            localStorage.setItem('cartInfo', JSON.stringify(cartItems))
            dispatch(getCartItemsInitiate())
          }
          toast.info('Product removed to Cart!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
      
      } 
        // const cartItems = []
        // cartItems.push({id:_id, qty:0})
        // console.log(cartItems)
        //do nothing
      
        console.log('no product added')
        localStorage.setItem('cartInfo', JSON.stringify(cartItems))
      
    
    }
  }
}

  const changeHandler = (e) => {
    e.target.value = quantity
  }

  return (
    <div className='productInCartWrapper'>
      <div className='cartleftInfo'>
        <div><img src={image} alt='product-pic'/></div>
        <div className='productIncartTitle'>{title}</div>
      </div>
      <div className='productInCartCounterWrapper'>
        <div className='productInCartCounter'>
          <CounterBtn btnClass='counterBtn' onClick={counterHandler}>-</CounterBtn>
          <input className='productInCartInput' value={quantity} onChange={changeHandler}/>
          <CounterBtn btnClass='counterBtn' onClick={counterHandler}>+</CounterBtn>
        </div>
        <div className='productInCartPrice'>${price}</div>
      </div>
    </div>
  )
}

export default ProductInCart
