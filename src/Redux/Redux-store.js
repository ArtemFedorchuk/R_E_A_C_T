import { createStore, combineReducers } from "redux";
import messageReducer from "./message-Reducer";
import profileReducer from "./profile-Reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
})

let store = createStore(redusers)

window.store = store

export default store