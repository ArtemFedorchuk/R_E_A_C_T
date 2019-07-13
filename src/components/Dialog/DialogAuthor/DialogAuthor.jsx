import React from 'react';
import d from './../DialogAuthor/DialogAuthor.module.css';
import { NavLink } from 'react-router-dom';

const DialogAuthor = (props) => {
    return (
        <div>
            <NavLink to={"/message_item/" + props.id} >
                <div className={d.dialog__messages_item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar" />
                    <h4>{props.name}</h4>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogAuthor;