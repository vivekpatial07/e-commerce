import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItemsInitiate } from '../../../redux/actionCreators/cartCreators'
import { allCartData } from '../../../redux/selectors/cartSelector'
import NavBar from '../../NavBar/NavBar'
import CommonLoader from '../../CommonLoader/CommonLoader'
import CommonButton from '../../BuyButton/CommonButton'
import ProductInCart from './ProductInCart/ProductInCart'
import './CartPage.css'

const CartPage = ({ history }) => {
  
  const dispatch = useDispatch()
  const { cartItems, cartItemLoader } = useSelector(allCartData)
  useEffect(() => {
    dispatch(getCartItemsInitiate())
  }, [dispatch])

  const buyNowHandler = () => {
    history.push('/ecommerce/placeOrder')
  }
  
  const productsInCart = cartItems.map((itm) =>  <ProductInCart product={itm} key={itm._id}/>)
  let totalprice = 0

  totalprice = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price*curr.qty)
  },0)
  
  const renderProducts = ( 
    <>
       <div className='cartPageLeftInfo'>
          <h2>Products</h2>
          {productsInCart}
        </div>
        <div className='cartPageRightInfo'>
          <h2>Price</h2>
          ${totalprice.toFixed(2)}
          <CommonButton btnClass='card-buy-now' onClick={buyNowHandler}>Buy Now</CommonButton>
          <CommonButton btnClass='card-add-to-cart'>Add to wishlist</CommonButton>
        </div>
    </>
  )

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
             {productsInCart.length>0 ? renderProducts : <div>Your cart is empty</div> }
              </div>
          </div>
        )
    }
    </>
  )
}

export default CartPage
