import React from 'react';
// import Post from './../My Posts/Post/Post';
import { addPostActionCreator, changeTextActionCreator } from '../../../Redux/State';
import Posts from './Posts';
import { connect } from 'react-redux';

const PostsContainer = (props) => {
    return (<Posts addPost={props.addPost} updateNewPostText={props.updateNewPostText} posts={props.posts} newPostText={props.newPostText}/>);
}

// debugger
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(changeTextActionCreator(text))
        }
    }
}

// const PostsContainer = connect( mapStateToProps, mapDispatchToProps)(Posts)
// export default PostsContainer

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)


// export default PostsContainer




// const PostsContainer = (props) => {

//     return (<Posts addPost={props.addPost} updateNewPostText={props.updateNewPostText} posts={props.posts} newPostText={props.newPostText}/>);

// }

// let mapStateToProps = (state) => {
//     return {
//         posts: state.profilePage.posts,
//         newPostText: state.profilePage.newPostText
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         updateNewPostText: (text) => {
//             dispatch(changeTextActionCreator(text))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);