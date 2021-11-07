import React, { useState, useEffect } from 'react';
import './App.scss';
import Chat from './Chat/Chat';
import ChatsList from './ChatsList/ChatsList';
import useScreenSizeType from './hooks/useScreenSizeType';

const App = () => {
  const [chatsInfo, setChatsInfo] = useState([
    // {
    //   chatId: 1,
    //   user: 'Daniel',
    //   age: 24,
    //   infAge: 30,
    //   cuid: '',
    // },
    // {
    //   chatId: 2,
    //   user: 'Rose',
    //   age: 24,
    //   infAge: 30,
    //   cuid: '',
    // },
    // {
    //   chatId: 3,
    //   user: 'Tihuana',
    //   age: 24,
    //   infAge: 30,
    //   cuid: '',
    // },
  ]);

  const [chatsData, setChatsData] = useState([
    // {
    //   id: 1,
    //   messageData: [
    //     { id: 1, author: 'inf', text: 'la;sd' },
    //     { id: 2, author: 'Daniel', text: 'asgdhjk123a' },
    //   ]
    // },
    // {
    //   id: 2,
    //   messageData: [
    //     { id: 1, author: 'inf', text: 'la;sd' },
    //     { id: 2, author: 'Daniel', text: 'asgdhjk123a' },
    //   ]
    // },
    // {
    //   id: 3,
    //   messageData: [
    //     { id: 1, author: 'inf', text: 'la;sd' },
    //     { id: 2, author: 'Daniel', text: 'asgdhjk123a' },
    //   ]
    // }
  ]);

  const [choosedChat, setChoosedChat] = useState();

  const choosedChatInfo = () => {
    if (!choosedChat) {
      return;
    }
    
    return chatsInfo.find(chat => chat.chatId === choosedChat);
  }

  const choosedChatData = () => {
    if (!choosedChat) {
      return;
    }

    return chatsData.find(chat => chat.id === choosedChat).messageData;
  }

  const screenSizeType = useScreenSizeType();

  useEffect(() => {
    if (localStorage.getItem('chatsInfo') && localStorage.getItem('chatsData')) {
      setChatsInfo(JSON.parse(localStorage.getItem('chatsInfo')));
      setChatsData(JSON.parse(localStorage.getItem('chatsData')));
    } else {
      localStorage.setItem('chatsInfo', []);
      localStorage.setItem('chatsData', []);
    }
  }, [ ]);

  useEffect(() => localStorage.setItem('chatsInfo', JSON.stringify(chatsInfo)), [chatsInfo]);
  useEffect(() => localStorage.setItem('chatsData', JSON.stringify(chatsData)), [chatsData]);

  const addMessage = (chatId, author, text) => {
    const chats = chatsData.map(chat => {
      if (chat.id === chatId) {
        chat.messageData.push({ id: Date.now(), author: author, text: text })
      }

      return chat;
    });
    
    setChatsData(chats);
  }

  const updateChatCuid = (chatId, cuid) => {
    const newChatsInfo = chatsInfo.map((chat) => {
      if (chat.chatId === chatId) {
        chat.cuid = cuid;
      }

      return chat;
    });

    setChatsInfo(newChatsInfo);
  }

  const clearHistory = (chatId) => {
    const newChatsInfo = chatsInfo.filter(chat => chat.chatId !== chatId);
    const newChatsData = chatsData.filter(chat => chat.id !== chatId);

    setChoosedChat();
    setChatsInfo(newChatsInfo);
    setChatsData(newChatsData);
  }

  const createNewChat = (user, age, infAge) => {
    const newChatId = chatsInfo.length > 0 ? chatsInfo[chatsInfo.length - 1].chatId + 1 : 1;

    setChatsInfo([...chatsInfo, {
      chatId: newChatId,
      user: user,
      age: age,
      infAge: infAge,
      cuid: '',
    }]);

    setChatsData([...chatsData, {
      id: newChatId,
      messageData: []
    }])
  }

  return (
    <div className="App">
      <div className="chat-app">
        { (screenSizeType !== 'mobile' || !choosedChat)
          && <ChatsList
            chatsInfo={ chatsInfo }
            chatsData={ chatsData }
            chooseChat={ id => setChoosedChat(id) }
            choosedChat={ choosedChat }
            createNewChat={ createNewChat }
            screenSizeType={ screenSizeType }
          />
        }

        { choosedChat
        && <Chat
            choosedChatInfo={ choosedChatInfo }
            choosedChatData={ choosedChatData }
            addMessage={ addMessage }
            updateChatCuid={ updateChatCuid }
            clearHistory={ clearHistory }
            unselectChat={ () => setChoosedChat() }
          />
        }

        { (screenSizeType !== 'mobile' && !choosedChat)
          && <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: '1'
          }}>
            Выберите чат
          </div>
        }
      </div>
    </div>
  );
}

export default App;