import React from 'react'
import './CounterBtn.css'

const CounterButton = ({
  children,
  btnClass,
  onClick
}) => {
  return (
    <div className='counter-btn-wrapper'>
      <button className={`${btnClass} counter-btn`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default CounterButton
