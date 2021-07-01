import React from 'react'
import ProdTile from './ProdTile/ProdTile'
import './HomeProd.css'


const HomeProd = () => {
  return (
    <div className='homeProdContainer'>
      <ProdTile />
      <ProdTile />
      <ProdTile />
      <ProdTile />
    </div>
  )
}

export default HomeProd
