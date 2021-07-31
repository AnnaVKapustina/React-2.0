import { combineReducers, createStore } from "redux";
import profileReduser from './reduser/profile';
import chatsReducer from "./reduser/Chats";
import chatReducer from "./reduser/Chat";

const rootReduser = combineReducers ({
    profile: profileReduser,
    chats: chatsReducer,
    chat: chatReducer
})

export const store = createStore (
    rootReduser, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)