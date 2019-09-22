import React from 'react';
import p from './Posts.module.css';
import Post from './Post/Post';




const Posts = (props) => {
    debugger
    // Функция которая мапит массив постов в новый массив
    let posts = props.state.profilePage.posts.map((p) => <Post text={p.message} author={p.auhor} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        
        let text = newPostElement.current.value
        // console.log(text)
        props.addPost(text)
        newPostElement.current.value = ''
    }

    let changeText = () => {
        
        let text = newPostElement.current.value   
        props.onChangeText(text)
        // console.log(text)

    }

    // store.dispach(addPost)

 
    return (
        <div className={p.post}>
            <div className="post__send">
                {/* <hr/> */}
                {/* <h4>My post</h4> */}
                <input type="textarea" ref={newPostElement} placeholder="Напишите пост" onChange={changeText} value={props.state.profilePage.newPostText} /><br />
                <button type="submit" onClick={addPost}>Send</button>
            </div>
            <hr />

            {posts}
        </div>
    );
}

export default Posts;