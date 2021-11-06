import React from 'react';
import DeleteIcon from '../svg/DeleteIcon';
import BackIcon from '../svg/BackIcon';

const ChatHeader = ({ title, clearHistory }) => {
  return (
    <div className="messanger-header">
      <button className="messanger-header__back btn"><BackIcon color="#66a6ed"/></button>
      <h2 className="messanger-header__title">{ title }</h2>
      <button className="messanger-header__refresh btn" onClick={ clearHistory }><DeleteIcon color="#f44336"/></button>
    </div>
  )
}

export default ChatHeader;
