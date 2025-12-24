import React, { useEffect, useState } from "react";
import { api } from "./api/api";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/chats").then(res => {setChats(res.data); setLoading(false);}).catch(err => {
      console.error(err);
      setLoading(false);
    });;
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading chats...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar chats={chats} onSelect={setActiveChat} />
      <ChatWindow chat={activeChat} />
    </div>
  );
}

export default App;
