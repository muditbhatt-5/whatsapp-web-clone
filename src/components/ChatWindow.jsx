import React from "react";
import MessageInput from "./MessageInput";

const ChatWindow = ({ chat }) => {
  if (!chat) {
    return <div className="chat-window empty">Select a chat</div>;
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="header-left">
          <img
            src={chat.avatar}
            alt="avatar"
            className="avatar-img"
          />
          <div>
            <h3>{chat.chatName}</h3>
            <span className="last-seen">
              {chat.lastSeen || "online"}
            </span>
          </div>
        </div>
      </div>

      <div className="messages">
        <div className="message received">
          No messages
        </div>
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatWindow;
