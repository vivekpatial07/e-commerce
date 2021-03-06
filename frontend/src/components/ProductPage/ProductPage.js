import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { checkRatedProdInit, clearSingleProduct, getSingleProductInitiate, rateProdInit } from '../../redux/actionCreators/productCreators'
import { allProductsData, singleProductData } from '../../redux/selectors/productsSelector'
import './ProductPage.css'
import CommonButton from '../BuyButton/CommonButton'
import CommonLoader from '../CommonLoader/CommonLoader'
import CartPopup from '../Cart/CartPopup/CartPopup'
import { toast } from 'react-toastify'
import { getCartItemsInitiate } from '../../redux/actionCreators/cartCreators'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar as unStar } from '@fortawesome/free-regular-svg-icons'

const initialRating = {
  star: null,
  review: null
}

const ProductPage = ({history, match: {params: { id, category }}}) => {

  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [starOne, toggleStarOne] = useState(false)
  const [starTwo, toggleStarTwo] = useState(false)
  const [starThree, toggleStarThree]  = useState(false)
  const [starFour, toggleStarFour]=  useState(false)
  const [starFive, toggleStarFive]  = useState(false)

  const [showCart, setShowCart] = useState(false) 
  // const [rateData, setRateData] = useState(initialRating)
  const dispatch = useDispatch()
  const { product, singleProductLoader } = useSelector(singleProductData)
  const { checkProdLoader, productRated, totalRatings } = useSelector(allProductsData)
  const [ratingAverage, setRatingAverage] = useState(0)
  //check if rated
  useEffect(() => {
    dispatch(checkRatedProdInit({
      prodId: id,
      userId: userInfo && userInfo._id
    }))
  }, [])


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
      localStorage.setItem('cartInfo', JSON.stringify(cartItems))
    } else {
      const cartItems = []
      cartItems.push({product_id:id, qty:1})
    
    
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
    history.push('/ecommerce/placeOrder')

  }

  const rateHandler = async(stars) => {
    if(!userInfo){
      toast.warning('You need to log in first', {
        position:'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      return history.push('/login')
    }
    const rateData = {
      stars: stars,
      userId: userInfo._id
    }

    await dispatch(rateProdInit(id, rateData))
  }


  // console.log(ratingAvg)
  useEffect(() => { 
    const ratingAvg = (totalRatings) && (totalRatings.reduce((acc, curr) => {
      return acc + curr.stars
    },0))/totalRatings.length
    console.log(ratingAvg)
    setRatingAverage(ratingAvg)
  }, [totalRatings, ratingAverage])


  const [starsToBeRendered, setStarsToBeRendered] = useState([])
  
  useEffect(() => {
    if(totalRatings.length > 0) {
      let i = 0
      if(ratingAverage % 1 === 0){
        const arr = []
          while(i < Math.trunc(ratingAverage)){
            const star = <FontAwesomeIcon icon={faStar} />
            arr.push(star)
            i++
          }
          setStarsToBeRendered(arr)
        } else {
          let i = 0
          const arr = []
          while(i < Math.trunc(ratingAverage)){
            const star = <FontAwesomeIcon icon={faStar} />
            arr.push(star)
            // setStarsToBeRendered([...starsToBeRendered,star])
            console.log(i)
            i++
          }
          const halfStar = <FontAwesomeIcon icon={faStarHalf} />
          arr.push(halfStar)
          console.log(arr)
          setStarsToBeRendered(arr)
          // setStarsToBeRendered([...starsToBeRendered,halfStar])
        }
      } 
      return () => {
        setStarsToBeRendered([])
      }
  }, [ratingAverage,totalRatings])
  

  // console.log(starsRated)

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
          <div className='starsRated'>{starsToBeRendered}({totalRatings.length} Ratings)

          </div>
          <div className='productPageDescription'>
            {product.description}
          </div>
          <div className='productPageNextStep'>
          <div className='productPageMainPrice'>Price ${product.price}</div>
          <div className='productPageBtnWrapper'>
            <CommonButton btnClass='card-add-to-cart' onClick={addtoCartHandler}>Add To Cart</CommonButton>
            <CommonButton btnClass='card-buy-now' onClick={buyProduct}>Buy Now</CommonButton>
          </div> 
          <div className='star'>
            {/* {!userInfo ? ( */}
            {
              productRated !== -1
                ? <div>already rated(in progress)</div>
                :(
                  <div>
              <div style={{fontSize: '24px', color: 'grey', whiteSpace: 'nowrap', marginBottom:'20px'}}>Leave your Ratings</div>
              <div style={{color: '#77c9d4'}}>
              <FontAwesomeIcon
                onClick={() => rateHandler('1')}
                onMouseOut={() => {
                  toggleStarOne(false)
                  toggleStarTwo(false)
                  toggleStarThree(false)
                  toggleStarFour(false)
                  toggleStarFive(false)
                }}
                onMouseOver={() => toggleStarOne(true)}
                icon={starOne?faStar:unStar}
              />
              <FontAwesomeIcon
                onClick={() => rateHandler('2')}
                onMouseOut={() => {
                  toggleStarOne(false)
                  toggleStarTwo(false)
                  toggleStarThree(false)
                  toggleStarFour(false)
                  toggleStarFive(false)
                }}
                onMouseOver={() => {
                  toggleStarOne(true)
                  toggleStarTwo(true)
                }}
                icon={starTwo?faStar:unStar}
              />
              <FontAwesomeIcon 
                onClick={() => rateHandler('3')}
                onMouseOut={() => {
                  toggleStarOne(false)
                  toggleStarTwo(false)
                  toggleStarThree(false)
                  toggleStarFour(false)
                  toggleStarFive(false)
                }}
                onMouseOver={() => {
                  toggleStarThree(true)
                  toggleStarOne(true)
                  toggleStarTwo(true)
                }}
                icon={starThree?faStar:unStar}/>
              <FontAwesomeIcon
                onClick={() => rateHandler('4')}
                onMouseOut={() => {
                  toggleStarOne(false)
                  toggleStarTwo(false)
                  toggleStarThree(false)
                  toggleStarFour(false)
                  toggleStarFive(false)
                }} 
                onMouseOver={() => {
                  toggleStarFour(true)
                  toggleStarOne(true)
                  toggleStarTwo(true)
                  toggleStarThree(true)
                }}
                icon={starFour?faStar:unStar}/>
              <FontAwesomeIcon 
                onClick={() => rateHandler('5')}
                onMouseOut={() => {
                  toggleStarOne(false)
                  toggleStarTwo(false)
                  toggleStarThree(false)
                  toggleStarFour(false)
                  toggleStarFive(false)
                }} 
                onMouseOver={() => {
                  toggleStarFive(true)
                  toggleStarOne(true)
                  toggleStarTwo(true)
                  toggleStarThree(true)
                  toggleStarFour(true)
                
                }}
                icon={starFive?faStar:unStar}/>
            </div>
            <div>
              <form>
                rating form(in progress)
              </form>
            </div>
            </div>
            )
          }
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
