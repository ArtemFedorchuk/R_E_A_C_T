const ADD_POST = 'ADD-POST'
const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT'

const profileReducer = (state, action) => {
    debugger
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.postMessage,
                likeCount: 45
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case ON_CHANGE_TEXT:
            state.newPostText = action.newText
            return state

        default: 
        return state
    }
}

export default profileReducer