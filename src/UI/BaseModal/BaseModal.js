import React from 'react';
import './BaseModal.scss';
import XIcon from '../../svg/XIcon';

function BaseModal({ children, closeModal }) {
  return (
    <div className="wrapper" onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="close-btn" onClick={closeModal}><XIcon/></div>
        { children }
      </div>      
    </div>
  )
}

export default BaseModal;