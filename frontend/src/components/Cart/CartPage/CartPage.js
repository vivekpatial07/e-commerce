import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemsInitiate } from '../../../redux/actionCreators/cartCreators'
import { allCartData } from '../../../redux/selectors/cartSelector'
import NavBar from '../../NavBar/NavBar'
import CommonLoader from '../../CommonLoader/CommonLoader'
import CommonButton from '../../BuyButton/CommonButton'
import ProductInCart from './ProductInCart/ProductInCart'
import './CartPage.css'

const CartPage = () => {
  
  const dispatch = useDispatch()
  const { cartItems, cartItemLoader } = useSelector(allCartData)
  
  useEffect(() => {
    dispatch(getCartItemsInitiate())
  }, [dispatch])

  const productsInCart = cartItems.map((itm) =>  <ProductInCart product={itm} key={itm._id}/>)

  return (
    <>
    <NavBar />
    { cartItemLoader
        ? (
          <div className='cartpageLoader'>
            <CommonLoader height={70} width={70} />
          </div>
        ) : (
          <div>
            <div style={{fontSize:'36px', fontWeight:'200', textAlign:'center'}}>Cart</div>
            <div className='cartPageContainer'>
              <div className='cartPageLeftInfo'>
                <h2>Products</h2>
                {productsInCart}
              </div>
              <div className='cartPageRightInfo'>
              <h2>Price</h2>
                $77
                <CommonButton btnClass='card-buy-now'>Buy Now</CommonButton>
                <CommonButton btnClass='card-add-to-cart'>Add to wishlist</CommonButton>
              </div>
              </div>
          </div>
        )
    }
    </>
  )
}

export default CartPage
