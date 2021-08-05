import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Router from './Router'

function App() {

  return (
    <div className="App">
      <div className="header">
        <Link to="/" className="header_link">Home</Link>
        <Link to="/profile" className="header_link">Profile</Link>
        <Link to="/chats" className="header_link">Chats</Link>
        <Link to="/news" className="header_link">News</Link>
      </div>
      <Router />
    </div>
  )
}
export default App;
