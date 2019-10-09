const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    }
}

const messageReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ text: body })
            return state
        default:
            return state
    }

}



export default messageReducer