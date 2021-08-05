import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReduser from './reduser/profile';
import chatsReducer from "./reduser/Chats";
import chatReducer from "./reduser/Chat";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import newsReduser from "./reduser/news";

const persistConfig = {
    key: 'root',
    storage
}

const rootReduser = combineReducers ({
    profile: profileReduser,
    chats: chatsReducer,
    chat: chatReducer,
    news: newsReduser
})

const persistedReduser = persistReducer(persistConfig, rootReduser)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore (
    persistedReduser, 
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)