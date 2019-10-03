const ADD_POST = 'ADD-POST'
const ON_CHANGE_TEXT = 'ON-CHANGE-TEXT'

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.postMessage,
            likeCount: 45
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === ON_CHANGE_TEXT) {
        state.newPostText = action.newText
    }
    return state
}
export default profileReducer