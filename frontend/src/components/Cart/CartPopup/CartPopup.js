import React, { useState } from 'react'
import CounterBtn from '../../CounterBtn/CounterBtn'
import './CartPopup.css'
const CartPopup = ({ productId }) => {
  const [qty, setQty] = useState(1)

  const incQty = (e) => {
  }

  const decQty = (e) => {
  }
  
  const stopProp = (e) => {
    e.stopPropagation()
  }

  return (
      <div className='PopupContainer' onClick={stopProp}>
        <div style={{fontSize:'24px'}}>Cart</div>
        <div>Image</div>
        <div className='cartPopupCounter'>
          <CounterBtn btnClass='counterBtn'>-</CounterBtn>
          <input className='cartInput' onClick={decQty} value={1}/>
          <CounterBtn btnClass='counterBtn' onClick={incQty}>+</CounterBtn>
        </div>
        <div>go to cart</div>
      </div>
  )
}

export default CartPopup
