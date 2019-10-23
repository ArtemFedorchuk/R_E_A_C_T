import { createStore, combineReducers } from "redux";
import messageReducer from "./message-Reducer";
import profileReducer from "./profile-Reducer";
import userReducer from "./user-Reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: userReducer
})

let store = createStore(redusers)

window.store = store

export default store