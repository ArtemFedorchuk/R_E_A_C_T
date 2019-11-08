// import Axios from "axios"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
    // Массив диалогов
    users: [
        // { id: 1, fullname: 'Vasso', located: { country: 'Ukraine', town: 'Kharkov' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss' },
        // { id: 2, fullname: 'Borya', located: { country: 'Ukraine', town: 'Kiev' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss two' },
        // { id: 3, fullname: 'Tioman', located: { country: 'Ukraine', town: 'Dnepr' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
        // { id: 4, fullname: 'Murcepan', located: { country: 'Austria', town: 'Oldtown' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
        // { id: 5, fullname: 'Murces', located: { country: 'Ukraine', town: 'Odessa' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss four' }
    ]
}

// Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {})

// Изменил в case FOLLOW: return {...u, followStatus: true} На return {...u, followStatus: false}, так же и в case UNFOLLOW! и все заработало!
// в случае чего вернуть обратно!
const userReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followStatus: false}
                    }
                    return u
                })
            }

        case UNFOLLOW:
                // debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followStatus: true}
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