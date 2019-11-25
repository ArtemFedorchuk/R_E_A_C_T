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
            { text: 'Hi my brother', id: 1},
            { text: 'Hello my friend Artem.', id: 2 },
            { text: 'Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?.', id: 3 }
            // { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
        ],

        newMessageBody: ''
}

const messageReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody:  action.body
                // newMessageBody: [...state.newMessageBody, action.body],
                // newMessageBody: action.body
            }
            // stateCopy.newMessageBody = {...state.newMessageBody}
            // stateCopy.newMessageBody = action.body
            // return stateCopy
        
        case SEND_MESSAGE:
                // debugger
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {text: body }]

            } 
            // stateCopy.newMessageBody = {...state.newMessageBody}
            // stateCopy.newMessageBody = ''
            // state.messages.push({ text: stateCopy.newMessageBody })
            // return stateCopy
        
        default:
            return state
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default messageReducer