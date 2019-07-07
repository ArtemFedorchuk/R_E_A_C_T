import React from 'react';
import d from './../Dialog/Dialog.module.css'

const Dialog = (prorps) =>{
    return(
        <div className={d.dialog}>
            <h1>DIALOGS</h1>
            <div className={d.dialog__messages}>
                <div className={d.dialog__messages_item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Ivan Durak</h4>
                    <p>Message:</p>
                    <i>I like orange</i>
                </div>
                <div className={d.dialog__messages_item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Igor Pupkin</h4>
                    <p>Message:</p>
                    <i>My name is Ihor</i>
                </div>
                <div className={d.dialog__messages_item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Anton Savok</h4>
                    <p>Message:</p>
                    <i>Hello my friend</i>
                </div>
                <div className={d.dialog__messages_item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Victor Blud</h4>
                    <p>Message:</p>
                    <i>wow wow wow</i>
                </div>
            </div>
        </div>
    )
}

export default Dialog;