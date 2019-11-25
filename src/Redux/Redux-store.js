import { createStore, combineReducers } from "redux";
import messageReducer from "./message-Reducer";
import profileReducer from "./profile-Reducer";
import userReducer from "./user-Reducer";
import newsReducer from './news-Reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: userReducer,
    newsPage: newsReducer
});

let store = createStore(reducers);

window.store = store;

export default store