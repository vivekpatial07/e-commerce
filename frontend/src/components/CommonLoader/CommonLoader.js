import React from 'react'
import Loader from 'react-loader-spinner'

const CommonLoader = ({height, width}) => {
  return <Loader
    type='TailSpin'
    color='#77C9D4'
    height={height}
    width={width}
  />
}

export default CommonLoader
