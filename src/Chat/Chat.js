import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatUserMessage from './ChatUserMessage';
import './Chat.scss';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const title = 'Chat title';

  const hrefData = {
    UUID: '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4',
    URL: 'https://biz.nanosemantics.ru/api/2.1/json/Chat.',
  };

  const [cuid, setCuid] = useState('');

  const request = async (endpoint, data) => {
    return await fetch(hrefData.URL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => console.error(error));
  }

  const initNewChat = () => {
    request('init', {
      "uuid": hrefData.UUID,
    })
    .then(result => {
      setCuid(result.result.cuid);
      localStorage.setItem('cuid', result.result.cuid);

      request('event', {
        "cuid": result.result.cuid,
        "euid": '00b2fcbe-f27f-437b-a0d5-91072d840ed3',
        "context": {
          "vars": {
          "user_name": 'user',
          "user_age": 23,
          "inf_age": 30,
          }
        }
      })
      .then(result => setMessages([{ id: Date.now(), author: 'inf', text: result.result.text.value }]));
    });
  }

  useEffect(() => {
    if (!localStorage.getItem('cuid')) {
      initNewChat();

      return;
    }

    setCuid(localStorage.getItem('cuid'));

    if (localStorage.getItem('messages')) {
      setMessages(JSON.parse(localStorage.getItem('messages')));
    }
  }, [ ]);

  useEffect(() => localStorage.setItem('messages', JSON.stringify(messages)), [messages]);

  const addMessage = (message, author) => {
    const newMessage = { id: Date.now(), author: author, text: message };

    setMessages((prevState) => [...prevState, newMessage]);
  }

  const sendMessage = (message, author) => {
    addMessage(message, author);
    request('request', { cuid: cuid, text: message })
      .then(result => {
        setCuid(result.result.cuid);
        localStorage.setItem('cuid', result.result.cuid);
        addMessage(result.result.text.value, 'inf');
      });
  }

  const clearHistory = () => {
    localStorage.setItem('messages', []);
    localStorage.setItem('cuid', '');
    setMessages([]);
    setCuid('');
    initNewChat();
  }

  return (
    <div className="chat">
      <div className="chats-list"></div>
      <div className="messanger">
        <ChatHeader title={ title } clearHistory={ clearHistory }/>
        <ChatMessages messagesData={ messages } />
        <ChatUserMessage sendMessage={ sendMessage } />
      </div>
    </div>
  )
}

export default Chat;