import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatUserMessage from './ChatUserMessage';
import './Chat.scss';

function Chat() {
  const [messages, setMessages] = useState([
    {id: '1',author: 'asdas', text: 'jadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjds'},
    {id: '2',author: 'asdas', text: 'jadgshkjds'},
    {id: '3',author: 'asdas', text: 'jadgshkjds'},
    {id: '4',author: 'asdas', text: 'jadgshkjds'},
    {id: '5',author: 'asdas', text: 'jadgshkjds'},
    {id: '6',author: 'author', text: 'jadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjds'},
    {id: '7',author: 'author', text: 'jadgshkjds'},
    {id: '8',author: 'author', text: 'jadgshkjds'},
    {id: '9',author: 'author', text: 'jadgshkjds'},
    {id: '10',author: 'asdas', text: 'jadgshkjds'},
    {id: '11',author: 'asdas', text: 'jadgshkjds'},
    {id: '12',author: 'asdas', text: 'jadgshkjds'},
    {id: '13',author: 'asdas', text: 'jadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjds'},
    {id: '14',author: 'author', text: 'jadgshkjds'},
    {id: '15',author: 'author', text: 'jadgshkjds'},
    {id: '16',author: 'author', text: 'jadgjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsshkjds'},
    {id: '17',author: 'author', text: 'NEHSCD \n HJSDJSKL'},
    {id: '18',author: 'author', text: 'jadgshkjds'},
    {id: '19',author: 'asdas', text: 'jadgshkjds'},
    {id: '20',author: 'author', text: 'jadgshkjds'},
    {id: '21',author: 'asdas', text: 'jadgshkjds'},
    {id: '22',author: 'asdas', text: 'jadgshkjds'},
    {id: '23',author: 'author', text: 'jadgshkjds'},
    {id: '24',author: 'asdas', text: 'jadgshkjds'},
    {id: '25',author: 'author', text: 'jadgsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdsjadgshkjdshkjds'},
    {id: '26',author: 'asdas', text: 'jadgshkjds'},
    {id: '27',author: 'asdas', text: 'jadgshkjds'},
    {id: '28',author: 'asdas', text: 'jadgshkjds'},
    {id: '29',author: 'asdas', text: 'jadgshkjds'},
    {id: '30',author: 'asdas', text: 'jadgshkjds'},
    {id: '31',author: 'author', text: 'jadgshkjds'},
    {id: '32',author: 'asdas', text: 'jadgshkjds'},
    {id: '33',author: 'asdas', text: 'jadgshkjds'},
    {id: '34',author: 'asdas', text: 'jadgshkjds'},
    {id: '35',author: 'author', text: 'jadgshkjds'},
    {id: '36',author: 'asdas', text: 'jadgshkjds'},
    {id: '37',author: 'asdas', text: 'jadgshkjds'},
  ]);

  const title = 'Chat title';

  function addMessage(message, author) {
    setMessages((prevState) => [...prevState, { id: Date.now(), author: author, text: message }]);
  }

  function sendMessage(message, author) {
    addMessage(message, author);
  }

  return (
    <div className="chat">
      <div className="chats-list"></div>
      <div className="messanger">
        <ChatHeader title={ title }/>
        <ChatMessages messagesData={ messages } />
        <ChatUserMessage sendMessage={ sendMessage } />
      </div>
    </div>
  )
}

export default Chat;