import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { clearSingleProduct, getSingleProductInitiate } from '../../redux/actionCreators/productCreators'
import { singleProductData } from '../../redux/selectors/productsSelector'
import './ProductPage.css'
import CommonButton from '../BuyButton/CommonButton'
import CommonLoader from '../CommonLoader/CommonLoader'

const ProductPage = ({match: {params: { id, category }}}) => {

  const dispatch = useDispatch()
  const { product, singleProductLoader } = useSelector(singleProductData)
  
  useEffect(() => {
    dispatch(getSingleProductInitiate(id))
    return () => {
      dispatch(clearSingleProduct())
    }
  },[dispatch, id])

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
            <CommonButton btnClass='card-add-to-cart'>Add To Cart</CommonButton>
            <CommonButton btnClass='card-buy-now'>Buy Now</CommonButton>
          </div>
        </div>
        </div>
      </div>
    )
  }
  </>
  )
}

export default ProductPage
