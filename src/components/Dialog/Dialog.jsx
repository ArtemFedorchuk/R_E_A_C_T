import React from 'react';
import d from './../Dialog/Dialog.module.css'
import DialogAuthor from './DialogAuthor/DialogAuthor';
import Message from './Message/Message';
// import { NavLink } from 'react-router-dom';

let DialogData = [
    {id : 1, name: 'Vasso'},
    {id : 2, name: 'Murces'},
    {id : 3, name: 'Adriano'},
    {id : 4, name: 'Victor'}
];

const Dialog = (prorps) => {
    return (
        <div className={d.dialog_Wraper}>
            <div className={d.dialog}>
                <div className={d.dialog__messages}>
                    <DialogAuthor name={DialogData[0].name} id={DialogData[0].id} />
                    <DialogAuthor name={DialogData[0].name} id={DialogData[1].id} />
                    <DialogAuthor name={DialogData[0].name} id={DialogData[2].id} />
                    <DialogAuthor name={DialogData[0].name} id={DialogData[3].id} />
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