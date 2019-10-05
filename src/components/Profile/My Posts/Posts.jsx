import React from 'react';
import p from './Posts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, changeTextActionCreator } from '../../../Redux/State';



const Posts = (props) => {
    // debugger
    // Функция которая мапит массив постов в новый массив
    let posts = props.state.profilePage.posts.map((p) => <Post text={p.message} author={p.auhor} />)

    let newPostText = props.state.profilePage.newPostText
    let newPostElement = React.createRef();

    let addPost = () => {
        
        let text = newPostElement.current.value;

        props.dispatch(addPostActionCreator(text))
        newPostElement.current.value = ''
    }

    let changeText = (e) => {
        
        // let text = newPostElement.current.value
        let text = newPostElement.current.value
        props.dispatch(changeTextActionCreator(text))
        console.log(text)
    }

    // store.dispach(addPost)

 
    return (
        <div className={p.post}>
            <div className="post__send">
                {/* <hr/> */}
                {/* <h4>My post</h4> */}
                <input type="textarea" ref={newPostElement} placeholder="Напишите пост" onChange={changeText} value={newPostText} /><br />
                <button type="submit" onClick={addPost}>Send</button>
            </div>
            <hr />

            {posts}
        </div>
    );
}

export default Posts;