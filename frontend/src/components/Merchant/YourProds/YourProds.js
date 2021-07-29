import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMerchProdInit } from '../../../redux/actionCreators/merchantCreator'
import { merchantData } from '../../../redux/selectors/merchantSelector'
import CommonLoader from '../../CommonLoader/CommonLoader'
import SingleProd from './SingleProd/SingleProd'
import './YourProds.css'

const YourProds = () => {

  const  dispatch = useDispatch()
  const { fetchMerchProdLoader, merchProds } = useSelector(merchantData)

  useEffect(() => {
    dispatch(fetchMerchProdInit())
  }, [])

  const allMerchProds = merchProds?.map(prod => <SingleProd product={prod} key={prod._id}/>)
  return (
    <div>
      <header>Your Products</header>
      <hr className='horLine'/>
      {fetchMerchProdLoader
        ? <div className='yourProdLoader'><CommonLoader height={100} width={70}/></div>
        : allMerchProds
      }
    </div>
  )
}

export default YourProds
