import React, { useState } from 'react';
import SendIcon from '../../svg/SendIcon';
import './ChatUserMessage.scss';

const ChatUserMessage = ({ user, sendMessage }) => {
  const [message, setMessage] = useState('');

  const send = (e) => {
    if (message.trim() === '') {
      return;
    }

    sendMessage(message, user);
    setMessage('');
  }

  return (
    <div className="chat-input">
      <input className="chat-input__input" placeholder="Введите сообщение ..." value={ message } onInput={ e => setMessage(e.target.value) }/>
      <button className="chat-input__btn-send btn" onClick={ send }>
        <SendIcon color="#66a6ed"/>
      </button>
    </div>
  )
}

export default ChatUserMessage;
