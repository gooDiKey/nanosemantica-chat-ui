import React, { useEffect } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMessages from './ChatMessages/ChatMessages';
import ChatUserMessage from './ChatUserMessage/ChatUserMessage';
import './Chat.scss';

const Chat = ({ choosedChatInfo, choosedChatData, addMessage, updateChatCuid, clearHistory, unselectChat }) => {
  const chatInfo = choosedChatInfo();
  const chatsData = choosedChatData();
  
  const hrefData = {
    UUID: '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4',
    URL: 'https://biz.nanosemantics.ru/api/2.1/json/Chat.',
  };

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
      updateChatCuid(chatInfo.chatId, result.result.cuid);

      request('event', {
        "cuid": result.result.cuid,
        "euid": '00b2fcbe-f27f-437b-a0d5-91072d840ed3',
        "context": {
          "vars": {
          "user_name": chatInfo.user,
          "user_age": chatInfo.age,
          "inf_age": chatInfo.infAge,
          }
        }
      })
      .then(result => addMessage(chatInfo.chatId, 'Инф', result.result.text.value));
    });
  }

  useEffect(() => {
    if (!chatInfo.cuid) {
      initNewChat();

      return;
    }
  }, [chatInfo.cuid]);

  const sendMessage = (message, author) => {
    addMessage(chatInfo.chatId, author, message);

    request('request', { cuid: chatInfo.cuid, text: message })
      .then(result => {
        addMessage(chatInfo.chatId, 'Инф', result.result.text.value,);
        updateChatCuid(chatInfo.chatId, result.result.cuid);
      });
  }

  return (
    <div className="chat">
      <ChatHeader
        title={ chatInfo.user }
        clearHistory={ () => clearHistory(chatInfo.chatId) }
        unselectChat={ unselectChat }
      />
      <ChatMessages
        user={ chatInfo.user }
        messagesData={ chatsData }
      />
      <ChatUserMessage
        user={ chatInfo.user }
        sendMessage={ sendMessage }
      />
    </div>
  )
}

export default Chat;