import React, { useEffect } from 'react'
import ProductSliderCard from './ProductSliderCard/ProductSliderCard'
import './ProductSlider.css'
import { getTopProductsInit } from '../../redux/actionCreators/productCreators'
import { useDispatch, useSelector } from 'react-redux'
import { allProductsData } from '../../redux/selectors/productsSelector'

const ProductSlider = () => {

  const dispatch = useDispatch()
  const { topProducts } = useSelector(allProductsData)
  
  useEffect(() => {
    if(topProducts.length <= 0){
      dispatch(getTopProductsInit())
    }
  }, [])

  const products = topProducts.map(prod => (
    <ProductSliderCard
      image={prod.image}
      title={prod.title}
      id={prod._id}
      category={prod.category}
    />
  ))

  return (
    <div className='productSliderContainer'>
      {products}
    </div>
  )
}

export default ProductSlider
