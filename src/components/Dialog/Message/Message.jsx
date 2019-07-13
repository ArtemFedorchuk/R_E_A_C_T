import React from 'react';
import m from './../Message/Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={m.message_item}>
                <i>{props.text}</i>
            </div>
        </div>
    )
}
export default Message;