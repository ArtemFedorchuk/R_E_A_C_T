import React from 'react';
import p from './Posts.module.css';
import Post from './Post/Post';

const Posts = () =>{
    return(
        <div className={p.post}>
                <div className="post__send">
                    {/* <hr/> */}
                    {/* <h4>My post</h4> */}
                    <input type="textarea" placeholder="Напишите пост"/><br />
                    <button type="submit">Send</button>
                </div>
                <hr/>

                <Post title='First Post' author='Artem Fedorchuk' />
                <Post title='Two Post' author='Igor Shilov'/>
                <Post title='Free Post' author='Alexandr Zelensky'/>
        </div>
    );
}

export default Posts;