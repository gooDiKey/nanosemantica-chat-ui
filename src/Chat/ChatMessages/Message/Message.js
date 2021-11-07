import React from 'react';
import './Message.scss';

const Message = ({ user, message, author }) => {
  const wrapperClass = 'message-line';
  const sideClass = author === user ? ' right' : ' left';
  console.log(message);

  return (
    <div className={ wrapperClass + sideClass }>
      <div className="message">
        <div className="message-text"  dangerouslySetInnerHTML={{ __html: message }}></div>
        <div className="message-information">{ author }</div>
      </div>
    </div>
  )
}

export default Message;