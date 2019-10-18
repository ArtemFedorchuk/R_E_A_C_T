const ADD_POST = 'ADD-POST'
const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT'

let initialState = {
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
}
const profileReducer = (state = initialState, action) => {
    // debugger
    let stateCopy = {...state}
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 45
            }

            stateCopy.posts = {...state.posts}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        

        case ON_CHANGE_TEXT: 
            stateCopy.newPostText = action.newText
            return stateCopy
        

        default: 
        return state
    }
}

export default profileReducer