import { createStore } from "redux";
import messageReducer from "./message-Reducer";
import profileReducer from "./profile-Reducer";


let redusers = ({
    profilePage: profileReducer,
    messagesPage: messageReducer
})

let store = createStore()

export default store