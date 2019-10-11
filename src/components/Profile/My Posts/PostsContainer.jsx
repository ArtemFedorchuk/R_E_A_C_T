import React from 'react';
// import Post from './../My Posts/Post/Post';
import { addPostActionCreator, changeTextActionCreator } from '../../../Redux/State';
import Posts from './Posts';



const PostsContainer = (props) => {
    // debugger
    // Функция которая мапит массив постов в новый массив
    // let posts = props.state.profilePage.posts.map((p) => <Post text={p.message} author={p.auhor} />)

    // let newPostText = props.state.profilePage.newPostText
    // let newPostElement = React.createRef();
    // let newPostElement = React.useRef();

    let addPost = () => {
        // debugger
        // let text = newPostElement.current.value;

        props.store.dispatch(addPostActionCreator())
        // newPostElement.current.value = ''
    }

    let changeText = (text) => {
        // debugger
        // const text = e.target.value
        // let text = newPostElement.current.value
        props.store.dispatch(changeTextActionCreator(text))
    }

    // store.dispach(addPost)


    return (<Posts addPost={addPost} updateNewPostText={changeText} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}/>);
}


export default PostsContainer