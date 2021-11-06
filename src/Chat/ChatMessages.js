import React from 'react';
import Message from './Message';

const ChatMessages = ({ messagesData }) => {
  const author = 'author';
  let messages = messagesData.map(message => 
    <Message
      message={ message.text }
      author={ message.author === author ? 'Пользователь' : 'Инф' }
      key={ message.id }
    />
  )

  return (
    <div className="messanger-window">
      { messages }
    </div>
  )
}

export default ChatMessages;