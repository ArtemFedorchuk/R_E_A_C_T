import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/State';
import Message from './Message';
import { connect } from 'tls';

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        onNewMessageChange: (e) => {
            let body = e.target.value
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)

export default MessageContainer