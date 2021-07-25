import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Chat from './Chat';
import Home from './Home';
import Chats from './Chats';
import Profile from './profile';

export default function Router(props) {

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/chats" exact render={() =>
                    <Chats
                        chats={props.chats}
                        currentChat={props.currentChat}
                        onCurrentChatChange={props.onCurrentChatChange}
                        getIsChatExists={props.getIsChatExists}
                        onAddChat={props.onAddChat}
                        onRemoveChat={props.onRemoveChat} />} />

                <Route path="/chats/:chatId?"
                    render={({ match }) => {
                        return (<div className="chat_item_page">
                            <p className="chat_item_header">{match.params.chatId}</p>
                            <Chat getIsChatExists={props.getIsChatExists} />
                        </div>)
                    }} />

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route>404 Not Found</Route>

            </Switch>
        </div>

    )
}