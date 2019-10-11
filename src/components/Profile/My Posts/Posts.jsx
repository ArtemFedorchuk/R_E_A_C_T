import React from 'react';
import p from './Posts.module.css';
import Post from './../My Posts/Post/Post';
// import { addPostActionCreator, changeTextActionCreator } from '../../../Redux/State';



const Posts = (props) => {
    // debugger
    // Функция которая мапит массив постов в новый массив
    let posts = props.posts.map((p) => <Post text={p.message} author={p.auhor} />)

    let newPostElement = React.createRef(); 

    let onAddPost = () => {
        props.addPost()
    }

    let onChangeText = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    // store.dispach(addPost)


    return (
        <div className={p.post}>
            <div className="post__send">
                {/* <hr/> */}
                {/* <h4>My post</h4> */}
                <input type="textarea" ref={newPostElement} placeholder="Напишите пост" value={props.newPostText} onChange={onChangeText} /><br />
                <button type="submit" onClick={onAddPost}>Send</button>
            </div>
            <hr />

            {posts}
        </div>
    );
}

export default Posts;