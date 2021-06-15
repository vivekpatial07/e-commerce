import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsInitiate } from '../../redux/actionCreators/productCreators'
import Nav from '../NavBar/NavBar'
const Home = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProductsInitiate())
  },[dispatch])
  
  return (
    <div>
      <Nav />
      <h1>Welcome to ecommerce</h1>
    </div>
  )
}

export default Home
