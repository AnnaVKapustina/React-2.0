import { combineReducers, createStore } from "redux";
import profileReduser from './reduser/profile';

const rootReduser = combineReducers ({
    profile: profileReduser
})

export const store = createStore (
    rootReduser, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)