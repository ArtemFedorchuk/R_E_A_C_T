const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
    // Массив диалогов
    users: [
        { id: 1, fullname: 'Vasso Teroristo', located: { country: 'Ukraine', town: 'Kharkov' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss' },
        { id: 2, fullname: 'Borya', located: { country: 'Ukraine', town: 'Kiev' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss two' },
        { id: 3, fullname: 'Tioman', located: { country: 'Ukraine', town: 'Dnepr' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
        { id: 4, fullname: 'Murcepan', located: { country: 'Austria', town: 'Oldtown' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
        { id: 5, fullname: 'Murces', located: { country: 'Ukraine', town: 'Odessa' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss four' }
    ]
}

const userReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followStatus: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followStatus: false}
                    }
                    return u
                })
            }

        case SETUSERS:
            return{ ...state, users: [...state.users, ...action.users] }

            default: 
            return state
    }

    }

export const followAC = (id) => ({type: FOLLOW, id})
export const unfollowAC = (id) => ({type: UNFOLLOW, id})
export const setUsersAC = (users) => ({type: SETUSERS, users})


export default userReducer