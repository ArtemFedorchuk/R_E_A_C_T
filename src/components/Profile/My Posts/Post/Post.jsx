import React from 'react';
import p from './Post.module.css';



const Post = (props) =>{
    

    console.log(props)
    return(
            <div className={p.post}>
                <div className='wrap_title'>
                    {/* <i>{props.title}</i> <br/> <br/> */}
                    <p><b>{props.author}</b></p>
                    <img src="https://icons8.com/iconizer/files/Free_pretty_office_Icons_part_4/orig/woman.png" alt="icon"/>
                </div>
                <p>{props.text}</p>
                {/* <p><b>{props.author}</b></p> */}
   
            </div>
            
    );
}

export default Post;