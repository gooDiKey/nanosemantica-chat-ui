import React from 'react';

const Message = ({ message, author }) => {
  const wrapperClass = 'message-line';
  const sideClass = author === 'Пользователь' ? ' right' : ' left'; 

  return (
    <div className={ wrapperClass + sideClass }>
      <div className="message">
        <div className="message-text">{ message }</div>
        <div className="message-information">{ author }</div>
      </div>
    </div>
  )
}

export default Message;