const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

const messageReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = {...state.newMessageBody}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case SEND_MESSAGE:{
            let stateCopy = {...state}
            stateCopy.newMessageBody = {...state.newMessageBody}
            stateCopy.newMessageBody = ''
            state.messages.push({ text: stateCopy.newMessageBody })
            return stateCopy
        }
        default:
            return state
    }

}



export default messageReducer