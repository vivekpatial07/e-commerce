import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { clearSingleProduct, getSingleProductInitiate } from '../../redux/actionCreators/productCreators'
import { singleProductData } from '../../redux/selectors/productsSelector'
import './ProductPage.css'
import CommonButton from '../BuyButton/CommonButton'
import CommonLoader from '../CommonLoader/CommonLoader'
import CartPopup from '../Cart/CartPopup/CartPopup'
import { toast } from 'react-toastify'
import { getCartItemsInitiate } from '../../redux/actionCreators/cartCreators'

const ProductPage = ({history, match: {params: { id, category }}}) => {

  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  const [showCart, setShowCart] = useState(false) 
  const dispatch = useDispatch()
  const { product, singleProductLoader } = useSelector(singleProductData)
  
  useEffect(() => {
    dispatch(getSingleProductInitiate(id))
    return () => {
      dispatch(clearSingleProduct())
    }
  },[dispatch, id])

  const addtoCartHandler = () => {
    // const dataToBeAdded = id
  //id should be passed down through the argument not like this.... will fix this later
    const cartItems =  JSON.parse(localStorage.getItem('cartInfo'))
    // if(userInfo){}
    if(cartItems) {
      const itmIndex = cartItems.findIndex(itm => itm.product_id===id)

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

  const buyProduct = () => {

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
  }

  return (
    <>
    <NavBar />
    { singleProductLoader
    ? (
      <div className='productPageLoader'>
        <CommonLoader height={70} width={70}/>
      </div>
    )
    : (
      <>
        {showCart && 
          <div className='cartPopupWrapper' onClick={()=> setShowCart(false)}>
            <CartPopup productId={id}/>
          </div>
        }
        <div className='productPageWrapper'>
        <div className='productPageImage'>
          <img src={product.image} alt='product'/>
        </div>
        <div className='detailsWrapper'>
          <div className='productPageTitle'>{product.title}</div>
          <div className='productPageDescription'>
            {product.description}
          </div>
          <div className='productPageNextStep'>
          <div className='productPageMainPrice'>Price ${product.price}</div>
          <div className='productPageBtnWrapper'>
            <CommonButton btnClass='card-add-to-cart' onClick={addtoCartHandler}>Add To Cart</CommonButton>
            <CommonButton btnClass='card-buy-now' onClick={buyProduct}>Buy Now</CommonButton>
          </div>
        </div>
        </div>
      </div>
      </>
    )
  }
  </>
  )
}

export default ProductPage
