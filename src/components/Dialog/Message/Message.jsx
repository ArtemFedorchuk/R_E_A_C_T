import React from 'react';
import m from './../Message/Message.module.css';

const Message = (props) => {
    // debugger
    return (
        <div>
            <div className={m.message_item}>
                <div>
                    <b>Author</b>
                </div>
                <div className={m.text_wrap}>
                    <div className={m.circle}></div>
                    <i>{props.text}</i>
                </div>
                <div className={m.text_wrap__two}>
                    <div className={m.circle_two}></div>
                    <i>{props.text}</i>
                </div>
                <div>
                    <textarea name="message" id="" rows="4" placeholder='Сообщение'></textarea>
                </div>
            </div>
        </div>
    )
}
export default Message;