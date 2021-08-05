import React from 'react';
import { Link } from 'react-router-dom';

function Home () { 
return (
<div className="home">
    <p className="home_text">Добро пожаловать в мое первое приложение, созданное при помощи React</p>
<div className="home_page">
<Link to="/" className="home_link">Home</Link>
<Link to="/profile" className="home_link">Profile</Link>
<Link to="/chats" className="home_link">Chats</Link>
</div>
</div>)
}
export default Home