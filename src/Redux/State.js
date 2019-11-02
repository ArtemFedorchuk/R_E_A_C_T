import profileReducer from "./profile-Reducer"
import messageReducer from "./message-Reducer"

const ADD_POST = 'ADD-POST'
const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export let store = {
    _state: {

        profilePage: {
            // Информация профиля
            profileInfo: [
                { name: 'Vasso Kolbasso' },
                { special: 'Doctor-reanimate' },
                { date: '27.08.1990' },
                { town: 'California' },
                { schoоl: 'Harvard' },
                { website: 'stroyukrinvest.com' }
            ],
            // Массив постов
            posts: [
                // { id: 1, message: 'sdfsdgsfdgsg', likeCount: 23, author: 'Artem Fedorchuk' },
                // { id: 1, message: postMessage, likeCount: 121, author: 'Igor Shilov' },
                // { id: 1, message: postMessage, likeCount: 16, author: 'Alexandr Zelensky' },
                // { id: 1, message: postMessage, likeCount: 133, author: 'Vitalino Tarantino' }
            ],
            newPostText: ''

        },

        messagesPage: {
            // Массив диалогов
            dialogs: [
                { id: 1, name: 'Vasso' },
                { id: 2, name: 'Murces' },
                { id: 3, name: 'Adriano' },
                { id: 4, name: 'Victor' }
            ],
            // Массив сообщений.
            messages: [
                { text: 'Hi my brother' },
                { text: 'Hello my friend Artem.' },
                { text: 'Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?.' }
                // { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
            ],

            newMessageBody: ''
        },

        newsPage: {
            // news content
        },

        musicPage: {
            // content music
        },

        settingPage: {
            // setting
        },

        navbar: {
            friends: [
                { name: 'Artem' },
                { name: 'Victor' },
                { name: 'Lucas' },
                { name: 'Valera' },
                { name: 'Nicolas' },
                // {name : 'Duglas'},
                { name: 'Djo' }
            ]
        }

    },
    renderEntireTree() {
        // console.log('hello')
    },

    subscribe(observer) {
        this.renderEntireTree = observer
    },

    dispatch(action) {
        // debugger

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this.renderEntireTree(this._state)

    }

}
export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST, postMessage: text
    }
}
export const changeTextActionCreator = (text) => {
    return {
        type: ON_CHANGE_TEXT, newText: text
    }
}
// export const changeTextActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY, newText: text
//     }
// }

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
// export const updateNewMessageBodyCreator = (body) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY, body: body
//     }
// }

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default store
window.store = store