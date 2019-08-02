import React from 'react';
import p from './Posts.module.css';
import Post from './Post/Post';



const Posts = (props) => {
    // debugger
    // Функция которая мапит массив постов в новый массив
    let posts = props.state.posts.map((p) => <post text={p.message} author={p.auhor} />)


    let newPostElement = React.createRef();

    let addPost = () => {
        
        let text = newPostElement.current.value
        console.log(text)
        props.addPost(text)
        // console.log('wow')
    }
 
    return (
        <div className={p.post}>
            <div className="post__send">
                {/* <hr/> */}
                {/* <h4>My post</h4> */}
                <input type="textarea" ref={newPostElement} placeholder="Напишите пост" /><br />
                <button type="submit" onClick={addPost}>Send</button>
            </div>
            <hr />

            {posts}
            <Post title='First Post' state={props.state} />
            <Post title='Two Post' state={props.state} />
            <Post title='Free Post' state={props.state} />
        </div>
    );
}

export default Posts;