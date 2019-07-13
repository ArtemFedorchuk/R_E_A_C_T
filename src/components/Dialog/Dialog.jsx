import React from 'react';
import d from './../Dialog/Dialog.module.css'
import DialogAuthor from './DialogAuthor/DialogAuthor';
// import { NavLink } from 'react-router-dom';

const Dialog = (prorps) => {
    return (
        <div className={d.dialog_Wraper}>
            <div className={d.dialog}>
                <div className={d.dialog__messages}>
                    <DialogAuthor name='Vasso' id ='1' />
                    <DialogAuthor name='Murces' id ='2' />
                    <DialogAuthor name='Adriano' id ='3' />
                    <DialogAuthor name='Victor' id ='4' />
                </div>
            </div>

            <div className={d.message}>
                <div className={d.message_item}>
                    <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus, deserunt unde impedit.</i>
                </div>
                <div className={d.message_item}>
                    <i>Hello my friend Artem</i>
                </div>
                <div className={d.message_item}>
                    <i>Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?</i>
                </div>
                <div className={d.message_item}>
                    <i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i>
                </div>
            </div>
        </div>
    )
}

export default Dialog;