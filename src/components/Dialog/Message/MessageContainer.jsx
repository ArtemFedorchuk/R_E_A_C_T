import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/State';
import { connect } from 'react-redux';
import Message from './Message';


const message = (props) =>{
    return(<Message/>)
}

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            alert('www')
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (e) => {
            let body = e.target.value
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(message)

export default MessageContainer


