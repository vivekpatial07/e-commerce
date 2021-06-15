import React from 'react'
import './CommonButton.css'

const CommonButton = ({
  children,
  btnClass,
  onClick
}) => {
  return (
    <div className='common-btn-wrapper'>
      <button className={`${btnClass} common-btn`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default CommonButton
