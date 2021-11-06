import React, { useState } from 'react';
import SendIcon from '../svg/SendIcon';

const ChatUserMessage = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const send = (e) => {
    if (message.trim() === '') {
      return;
    }

    sendMessage(message, 'author');
    setMessage('');
  }

  return (
    <div className="messanger-input">
      {/* <div className="messanger-input__input" contenteditable="true" role="textbox" aria-multiline="true">jsdfakjdl</div> */}
      <input className="messanger-input__input" placeholder="Введите сообщение ..." value={ message } onInput={ e => setMessage(e.target.value) }/>
      <button className="messanger-input__btn-send btn" onClick={ send }>
        <SendIcon color="#66a6ed"/>
      </button>
    </div>
  )
}

export default ChatUserMessage;
