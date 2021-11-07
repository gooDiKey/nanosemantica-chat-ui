import React, { useState } from 'react'
import './ChatsList.scss';
import ChatsListItem from './ChatListItem/ChatsListItem';
import CreateChatFormModal from './CreateChatFormModal/CreateChatFormModal';

const ChatsList = ({ chatsInfo, chatsData, chooseChat, choosedChat, createNewChat, screenSizeType }) => {
  const [isVisibleCreateChat, setIsVisibleCreateChat] = useState(false);

  const lastMessage = (id) => {
    const chatIndex = chatsData.findIndex(chat => chat.id === id);
    const messageData = chatsData[chatIndex].messageData;

    if (messageData.length === 0) {
      return;
    }

    let lastMessage = messageData[messageData.length - 1].text; 
    let stringLenght;
    
    switch (screenSizeType) {
      case 'mobile':
        stringLenght = 35;
        break;
      case 'medium':
        stringLenght = 30;
        break;
      case 'large':
        stringLenght = 50;
        break;
      default:
        stringLenght = 35;
        break;
    }

    if (lastMessage.length > stringLenght) {
      lastMessage = lastMessage.slice(0, stringLenght) + ' ...';
    }

    return lastMessage
  };

  const chats = chatsInfo.map(chat => 
    <ChatsListItem
      id={ chat.chatId }
      name={ chat.user }
      text={ lastMessage(chat.chatId) }
      active={ chat.chatId === choosedChat }
      chooseChat={ chooseChat }
      key={ chat.chatId }
    />
  );

  return (
    <div className="chats-list">
      { isVisibleCreateChat && <CreateChatFormModal createNewChat={ createNewChat } closeModal={ () => setIsVisibleCreateChat(false) } /> }
      <div className="create-chat-btn" onClick={ () => setIsVisibleCreateChat(true) }><h2>Создать новый чат</h2></div>
      { chats.length > 0
        ? <div className="chats">{ chats }</div>
        : <div className="chats-list__alternative-text">
            <div>
              <span>У вас пока нет чатов.</span>
              <span>Чтобы создать чат нажмите на кнопку "Создать новый чат" и начинайте общение!</span>
            </div>
          </div> 
      }  
    </div>
  )
}

export default ChatsList
