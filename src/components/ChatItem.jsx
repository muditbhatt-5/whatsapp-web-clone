import React from "react";

const ChatItem = ({ chat, onSelect }) => {
  return (
    <div className="chat-item" onClick={() => onSelect(chat)}>
      <img
        src={chat.avatar}
        alt="avatar"
        className="avatar-img"
      />

      <div className="chat-info">
        <h4>{chat.chatName}</h4>
        <p>{chat.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;
