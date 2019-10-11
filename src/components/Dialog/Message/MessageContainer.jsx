import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/State';
import Message from './Message';

// sendMessageCreator
// updateNewMessageBodyCreator



const MessageContainer = (props) => {
    // debugger

    let newMessageBody = props.state.messagesPage.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    // Func input text
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (<Message/>)
}
export default MessageContainer;