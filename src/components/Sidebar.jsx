import React from "react";
import ChatItem from "./ChatItem";

const Sidebar = ({ chats, onSelect }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">WhatsApp</div>

      <div className="chat-list">
        {chats.map(chat => (
          <ChatItem key={chat.id} chat={chat} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
