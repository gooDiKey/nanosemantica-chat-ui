import React from 'react'

function Message({ message, author }) {
  let wrapperClass = 'message-line';
  let sideClass = author === 'Пользователь' ? ' right' : ' left'; 

  return (
    <div className={ wrapperClass + sideClass }>
      <div className="message">
        <div className="message-text">{ message }</div>
        <div className="message-information">{ author }</div>
      </div>
    </div>
  )
}

export default Message
