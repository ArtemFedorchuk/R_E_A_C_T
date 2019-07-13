import React from 'react';
import d from './../Dialog/Dialog.module.css'
import DialogAuthor from './DialogAuthor/DialogAuthor';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';

const Dialog = (prorps) => {
    return (
        <div className={d.dialog_Wraper}>
            <div className={d.dialog}>
                <div className={d.dialog__messages}>
                    <DialogAuthor name='Vasso' id='1' />
                    <DialogAuthor name='Murces' id='2' />
                    <DialogAuthor name='Adriano' id='3' />
                    <DialogAuthor name='Victor' id='4' />
                </div>
            </div>

            <div className={d.message}>
                <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus, deserunt unde impedit." />
                <Message text="Hello my friend Artem." />
                <Message text="Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?." />
                <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            </div>
        </div>
    )
}

export default Dialog;