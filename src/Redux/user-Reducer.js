const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
        // Массив диалогов
        users: [
            { id: 1, fullname: 'Vasso', located: {country: 'Ukraine', town: 'Kharkov'}, followStatus: true, faceId: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss' },
            { id: 2, fullname: 'Borya', located: {country: 'Ukraine', town: 'Kiev'}, followStatus: false, faceId: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss two' },
            { id: 3, fullname: 'Tioman', located: {country: 'Ukraine', town: 'Dnepr'}, followStatus: true, faceId: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
            { id: 4, fullname: 'Murces', located: {country: 'Ukraine', town: 'Odessa'}, followStatus: false, faceId: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss four' }
        ]
}

const userReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                newMessageBody:  action.body
                // newMessageBody: [...state.newMessageBody, action.body],
                // newMessageBody: action.body
            }
            // stateCopy.newMessageBody = {...state.newMessageBody}
            // stateCopy.newMessageBody = action.body
            // return stateCopy
        
        case UNFOLLOW:
            return {
                ...state,
                newMessageBody: [...state.newMessageBody, ''],
                // newMessageBody: '',
                messages: [...state.messages, { text: action.body }]

            }
            // stateCopy.newMessageBody = {...state.newMessageBody}
            // stateCopy.newMessageBody = ''
            // state.messages.push({ text: stateCopy.newMessageBody })
            // return stateCopy
        
        default:
            return state
    }

}



export default userReducer