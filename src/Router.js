import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Chat from './Chat';
import Home from './Home';
import Chats from './Chats';
import Profile from './profile';

export default function Router() {

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/chats" exact render={() =>
                    <Chats />} />

                <Route path="/chats/:chatId?">
                    <Chat />
                </Route>    
                  

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route>404 Not Found</Route>

            </Switch>
        </div>

    )
}