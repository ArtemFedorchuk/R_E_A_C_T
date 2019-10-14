import React from 'react';
// import Post from './../My Posts/Post/Post';
import { addPostActionCreator, changeTextActionCreator } from '../../../Redux/State';
import Posts from './Posts';
// import { connect } from 'tls';
import { connect } from 'react-redux';

// const PostsContainer = (props) => {

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let changeText = (text) => {
//         props.store.dispatch(changeTextActionCreator(text))
//     }

//     return (<Posts addPost={addPost} updateNewPostText={changeText} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}/>);
// }
// export default PostsContainer

// debugger
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(changeTextActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer