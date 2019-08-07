import React from 'react';
import d from './../DialogAuthor/DialogAuthor.module.css';
import { NavLink } from 'react-router-dom';

const DialogAuthor = (props) => {
    // debugger

    let path = "/message_item/" + props.id
    return (

        <div>
            <NavLink to={path} >
                <div className={d.dialog__messages_item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar" />
                    <h4>{props.name}</h4>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogAuthor;