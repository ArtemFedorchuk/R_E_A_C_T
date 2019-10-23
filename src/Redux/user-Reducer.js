const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    // Массив диалогов
    users: [
        { id: 1, fullname: 'Vasso Teroristo', located: { country: 'Ukraine', town: 'Kharkov' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss' },
        { id: 2, fullname: 'Borya', located: { country: 'Ukraine', town: 'Kiev' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss two' },
        { id: 3, fullname: 'Tioman', located: { country: 'Ukraine', town: 'Dnepr' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
        { id: 4, fullname: 'Murces', located: { country: 'Ukraine', town: 'Odessa' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss four' }
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

            default: 
            return state
    }

    }

export const followAC = (id) => ({action: FOLLOW, id})
export const unfollowAC = (id) => ({action: UNFOLLOW, id})


export default userReducer