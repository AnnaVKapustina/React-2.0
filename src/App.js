import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Router from './Router'
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { changeIsAuthed } from './action/profile';

function App() {

  const dispatch = useDispatch()
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChange', { user })
      dispatch(changeIsAuthed(!!user))
    })
  }, [])

  const handleSignOut = e => {
    e.preventDefault()
    firebase.auth().signOut()
  }

  return (
    <div className="App">
      <div className="header">
        <Link to="/" className="header_link">Home</Link>
        <Link to="/profile" className="header_link">Profile</Link>
        <Link to="/chats" className="header_link">Chats</Link>
        <Link to="/news" className="header_link">News</Link>
        <Link to="/login" className="header_link">Login</Link>
        <a className="header_link login_out" onClick={handleSignOut}>Выйти из профиля</a>
      </div>
      <Router />
    </div>
  )
}
export default App;
