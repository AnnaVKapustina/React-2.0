import React from 'react';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Router from './Router'

function App() {

  const [chats, setChats] = React.useState([
    { id: 'chat1', name: 'Чат 1' },
    { id: 'chat2', name: 'Чат 2' },
    { id: 'chat3', name: 'Чат 3' }])

  const [currentChat, setCurrentChat] = useState(chats[0])
  const handleChangeChat = (chat) => setCurrentChat(chat)

  const handleAddChat = (chatName) => {
    setChats((currentChats) => [
      ...currentChats,
      { name: chatName, id: `chat${Date.now()}` },
    ])
  }

  const handleRemoveChat = (chatId) => {
    setChats((currentChats) =>
      currentChats.filter((chat) => chat.id !== chatId)
    )
  }
  const handleIsChatExists = React.useCallback(
    (chatId) => {
      return Boolean(chats.find((chat) => chat.id === chatId))
    },
    [chats]
  )

  return (
    <div className="App">
      <div className="header">
        <Link to="/" className="header_link">Home</Link>
        <Link to="/profile" className="header_link">Profile</Link>
        <Link to="/chats" className="header_link">Chats</Link>
      </div>
      <Router
        chats={chats}
        currentChat={currentChat}
        onCurrentChatChange={handleChangeChat}
        getIsChatExists={handleIsChatExists}
        onAddChat={handleAddChat}
        onRemoveChat={handleRemoveChat} />
    </div>
  )
}
export default App;
