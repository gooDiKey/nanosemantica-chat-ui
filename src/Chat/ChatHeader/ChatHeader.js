import React, { useState } from 'react';
import DeleteIcon from '../../svg/DeleteIcon';
import BackIcon from '../../svg/BackIcon';
import ResetChatAlertModal from '../ResetChatAlertModal/ResetChatAlertModal';
import './ChatHeader.scss';

const ChatHeader = ({ title, clearHistory, unselectChat }) => {
  const [isVisibleAllert, setIsVisibleAllert] = useState(false);

  return (
    <div className="chat-header">
      { isVisibleAllert && <ResetChatAlertModal clearHistory={ clearHistory } closeModal={ () => setIsVisibleAllert(false) }/> }
      
      <button className="chat-header__back btn" onClick={ unselectChat }><BackIcon color="#66a6ed"/></button>
      <h2 className="chat-header__title">{ title }</h2>
      <button className="chat-header__refresh btn" onClick={ () => setIsVisibleAllert(true) }><DeleteIcon color="#f44336"/></button>
    </div>
  )
}

export default ChatHeader;
