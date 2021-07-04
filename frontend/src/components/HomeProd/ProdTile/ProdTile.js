import React from 'react'
import './ProdTile.css'
import { useHistory } from 'react-router-dom'

const ProdTile = ({ image, category }) => {
  
  const history = useHistory()

  const clickHandler = () => {
    history.push(`ecommerce/products/${category}`)
  }

  return (
    <div className='prodTileContainer' onClick={clickHandler}>
      <div>
        <img src={image} alt='prod-tile'/>

      </div>
    </div>
  )
}

export default ProdTile
