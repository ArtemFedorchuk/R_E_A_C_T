import React from 'react';
import m from './../Message/Message.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/State';

// sendMessageCreator
// updateNewMessageBodyCreator



const Message = (props) => {
    debugger

    let newMessageBody = props.state.messagesPage.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    // Func input text
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
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
                    <textarea name="message" id="" rows="4" placeholder='Сообщение' value={newMessageBody} onChange={onNewMessageChange}></textarea>
                    <button className={m.button} onClick={onSendMessageClick} >Send</button>
                </div>
            </div>
        </div>
    )
}
export default Message;