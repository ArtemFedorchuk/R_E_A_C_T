import React from 'react';
import d from './../Dialog/Dialog.module.css'
import DialogAuthor from './DialogAuthor/DialogAuthor';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';


const Dialog = (props) => { 
debugger

    // Функция которая мапит массив диалогов в новый массив
    let Dialogs = props.state.dialogs.map((d) => <DialogAuthor name={d.name} id={d.id} />)

    // Функция которая мапит массив сообщений в новый массив
    let Messages = props.state.messages.map((m) => <Message text={m.text} />)

    return (
        <div className={d.dialog + '' + d.active}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>

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