import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Chat from './Chat';
import Home from './Home';
import Chats from './Chats';
import Profile from './profile';
import News from './news';
import Login from './Login';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)
    return isAuthed ? <Route { ...props } /> : <Redirect to="/login" />
}

export default function Router() {

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <PrivateRoute path="/chats" exact render={() =>
                    <Chats />} />

                <PrivateRoute path="/chats/:chatId?">
                    <Chat />
                </PrivateRoute>    
                  

                <PrivateRoute path="/profile">
                    <Profile />
                </PrivateRoute>

                <Route path="/news">
                    <News />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route>404 Not Found</Route>

            </Switch>
        </div>

    )
}