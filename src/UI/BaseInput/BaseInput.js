import React from 'react';
import './BaseInput.scss';

const BaseInput = ({...props}) => {
  return (
    <input 
      className="base-input"
      {...props}
    />
  )
}

export default BaseInput
