import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CommonLoader from '../CommonLoader/CommonLoader'
import { getAllProductsInitiate } from '../../redux/actionCreators/productCreators'
import Nav from '../NavBar/NavBar'
import ProductCard from '../ProductCard/ProductCard'
import { allProductsData } from '../../redux/selectors/productsSelector'
import './Home.css'
import Carousel from '../Carousel/Carousel'
import { SliderData } from '../../Assets/Carousel/CarouselData'
import Category from '../Category/Category'
import ProductSlider from '../ProductSlider/ProductSlider'
import HomeProd from '../HomeProd/HomeProd'

const Home = () => {
  
  // const dispatch = useDispatch()
  const { allProducts, topProductsLoader } = useSelector(allProductsData) 

  // useEffect(()=>{
  //   dispatch(getAllProductsInitiate())
  // },[dispatch])
  
  // const products = allProducts.map(product => {
  //   return <ProductCard
  //     key={product._id}
  //     title={product.title}
  //     category={product.category}
  //     price={product.price}
  //     image={product.image}
  //     id={product._id}
  //     />
  // })

  return (
    <div>
      <Nav />
      {/* <h1 className='home-header'>Welcome to ecommerce</h1> */}
      {topProductsLoader
        ? (
          <div className='homeLoaderWrapper'><CommonLoader height={70} width={70}/></div>
        ): (
        <>
          <div style={{margin:'20px 0'}}>
            <Carousel slides={SliderData}/>
          </div>
          <Category />

          <HomeProd />
          <ProductSlider />
        </>
        )
      }
    </div>
  )
}

export default Home
