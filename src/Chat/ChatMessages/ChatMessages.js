import React from 'react';
import Message from './Message/Message';
import './ChatMessages.scss';

const ChatMessages = ({ user, messagesData }) => {
  let messages = messagesData.map(message => 
    <Message
      user={ user }
      message={ message.text }
      author={ message.author }
      key={ message.id }
    />
  )

  return (
    <div className="chat-window">
      { messages }
    </div>
  )
}

export default ChatMessages;