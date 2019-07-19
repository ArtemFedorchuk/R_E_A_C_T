import React from 'react';
import p from './Post.module.css';



const Post = (props) =>{
    return(
            <div className={p.post}>
                <div className='wrap_title'>
                    <i>{props.title}</i> <br/> <br/>
                    <img src="https://icons8.com/iconizer/files/Free_pretty_office_Icons_part_4/orig/woman.png" alt=""/>
                </div>
                
                <p><b>{props.author}</b></p>

                
                
                
            </div>
    );
}

export default Post;