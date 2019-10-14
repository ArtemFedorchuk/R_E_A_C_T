import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/State';
import Message from './Message';
import { connect } from 'tls';

// sendMessageCreator
// updateNewMessageBodyCreator



// const MessageContainer = (props) => {
//     // debugger

//     let newMessageBody = props.state.messagesPage.newMessageBody;
//     let onSendMessageClick = () => {
//         props.dispatch(sendMessageCreator())
//     }
//     // Func input text
//     let onNewMessageChange = (e) => {
//         let body = e.target.value
//         props.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return (<Message onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} newMessageBody={newMessageBody} />)
// }
// export default MessageContainer;


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