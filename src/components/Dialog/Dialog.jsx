import React from 'react';
import d from './../Dialog/Dialog.module.css'
import DialogAuthor from './DialogAuthor/DialogAuthor';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';


const Dialog = (props) => { 
// debugger

    // Функция которая мапит массив диалогов в новый массив
    let Dialogs = props.state._state.messagesPage.dialogs.map((d) => <DialogAuthor name={d.name} id={d.id} state={props.state} />)

    // Функция которая мапит массив сообщений в новый массив
    let Messages = props.state._state.messagesPage.messages.map((m) => <Message text={m.text} state={props.state} dispatch={props.dispatch}/>)

    return (


        <div className={d.dialog_wraper}>

            <div>
                {Dialogs}
            </div>

            <div>
                {Messages}
            </div>
        </div>
    )
}

export default Dialog;