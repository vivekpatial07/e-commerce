import React from 'react'
import './ProductCard.css'
import CommonButton from '../BuyButton/CommonButton'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { getCartItemsInitiate } from '../../redux/actionCreators/cartCreators'


const ProductCard = ({
  id,
  image,
  title,
  category,
  price,
  history,
  match: { path }
}) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
 
  const dispatch = useDispatch()
 
  const buyNowHandler = (e) => {
    console.log('buy now')

    if(!userInfo) {

      toast.warning('You need to log in first', {
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      history.push('/login')
    }


    history.push('/ecommerce/placeOrder')
  }


  const addToCartHandler = () => {
    // const dataToBeAdded = id
  //id should be passed down through the argument not like this.... will fix this later
    const cartItems =  JSON.parse(localStorage.getItem('cartInfo'))
    // if(userInfo){}
    if(cartItems) {
      const itmIndex = cartItems.findIndex(itm => itm.product_id===id)
      console.log(itmIndex)
      if(itmIndex === -1) {
        cartItems.push({product_id:id,qty:1})
      } else {
        cartItems[itmIndex].qty+=1 
      }
      console.log(cartItems)
      localStorage.setItem('cartInfo', JSON.stringify(cartItems))
    } else {
      const cartItems = []
      cartItems.push({product_id:id, qty:1})
      console.log(cartItems)
    
    
      localStorage.setItem('cartInfo', JSON.stringify(cartItems))
    
    }
    // setShowCart(true)
    if(!userInfo) {
      toast.success('Product added to Cart!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
    
    dispatch(getCartItemsInitiate())
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
