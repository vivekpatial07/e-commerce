import React from 'react'
import ProdTile from './ProdTile/ProdTile'
import './HomeProd.css'
import TileOne from '../../Assets/Images/homeProdTileOne.jpg'
import TileTwo from '../../Assets/Images/homeProdTileTwo.jpg'
import TileThree from '../../Assets/Images/homeProdTileThree.jpg'
import TileFour from '../../Assets/Images/homeProdTileFour.jpg'

const HomeProd = () => {
  return (
    <div className='homeProdContainer'>
      <ProdTile image={TileOne} category='electronics'/>
      <ProdTile image={TileTwo} category='jewellery'/>
      <ProdTile image={TileThree} category='men'/>
      <ProdTile image={TileFour} category='women'/>
    </div>
  )
}

export default HomeProd
