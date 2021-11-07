import React from 'react'
import './BaseButton.scss'

const BaseButton = ({ children, onClick, additionalClass = '' }) => {
  const buttonClassName = 'base-button ' + additionalClass; 

  return (
    <button className={ buttonClassName } onClick={ onClick }>
      { children }
    </button>
  )
}

export default BaseButton
