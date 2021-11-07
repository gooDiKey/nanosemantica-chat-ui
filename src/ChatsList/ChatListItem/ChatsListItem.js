import React from 'react';
import './ChatsListItem.scss';

const ChatsListItem = ({ id, name, text, active, chooseChat }) => {
  const mainClass = 'chats-item';
  const activeClass = 'active';
  let chatsItemClass = active ? mainClass + ' ' + activeClass : mainClass;

  return (
    <div
      className={ chatsItemClass }
      onClick={ () => chooseChat(id) }
    >
      <h3 className="chats-item__user-name">{ name }</h3>
      <div className="chats-item__last-message">{ text }</div>
    </div>
  )
}

export default ChatsListItem;