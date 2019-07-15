import React from 'react';
import d from './../Dialog/Dialog.module.css'
import DialogAuthor from './DialogAuthor/DialogAuthor';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    console.log(props)

    
    // Функция которая мапит массив диалогов в новый массив
    // let Dialogs = props.map( (d) => <DialogAuthor name={d.name} id={d.id} />)

    // Функция которая мапит массив сообщений в новый массив
    // let Messages = props.map( (m) => <Message text={m.text} />)
    
    return (
        <div className={d.dialog_Wraper}>
            <div className={d.dialog}>
                <div className={d.dialog__messages}>
                    {/* {Dialogs} */}
                </div>
            </div>

            <div className={d.message}>
                {/* {Messages} */}
            </div>
        </div>
    )
}

export default Dialog;