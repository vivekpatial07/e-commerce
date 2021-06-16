import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { clearSingleProduct, getSingleProductInitiate } from '../../redux/actionCreators/productCreators'
import { singleProductData } from '../../redux/selectors/productsSelector'
import './ProductPage.css'
import CommonButton from '../BuyButton/CommonButton'
const ProductPage = ({match: {params: { id, category }}}) => {

  const dispatch = useDispatch()
  const { product } = useSelector(singleProductData)
  
  useEffect(() => {
    dispatch(getSingleProductInitiate(id))
    return () => {
      dispatch(clearSingleProduct())
    }
  },[dispatch, id])

  return (
    <>
    <NavBar />
    <div className='productPageWrapper'>
      <div className='productPageImage'>
        <img src={product.image} alt='product'/>
      </div>
      <div className='detailsWrapper'>
        <div className='productPageTitle'>{product.title}</div>
        <div className='productPagePrice'>Price: ${product.price}</div>
        <CommonButton btnClass='card-add-to-cart'>add</CommonButton>
        <CommonButton btnClass='card-add-to-cart'>buy</CommonButton>
        <div className='productPageDescription'>
          <div>
            Product Description
          </div>
          <div>
            {product.description}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage
