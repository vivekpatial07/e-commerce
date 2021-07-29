import React from 'react'
import './SingleProd.css'

const SingleProd = ({ product }) => {
  return (
    <div className='singleProdContainer'>
      <div className='roundProd'>

      </div>
      <div className='singleProdTitle'>
        {product.title}
      </div>
      <div className='editProd'>
        <button className='editProdBtn'>Edit Product</button>
      </div>
    </div>
  )
}

export default SingleProd
