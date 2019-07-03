import React from 'react';
import p from '../Posts.module.css';

const MyPosts = () =>{
    return(
            <div className={p.post}>
                <div className="post__send">
                    <h4>My post</h4>
                    <input type="textarea" />
                    <button type="submit">Send</button>
                </div>

                <div className="post__publick">
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
    );
}

export default MyPosts;