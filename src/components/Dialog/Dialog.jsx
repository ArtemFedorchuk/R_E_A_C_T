import React from 'react';
import d from './../Dialog/Dialog.module.css'

const Dialog = (prorps) =>{
    return(
        <div className={d.dialog}>
            <h1>DIALOGS</h1>
            <div className={d.dialog__messages}>
                <div className={d.dialog__messages-item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Igor</h4>
                    <p>Message</p>
                </div>
                <div className={d.dialog__messages-item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Igor</h4>
                    <p>Message</p>
                </div>
                <div className={d.dialog__messages-item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Igor</h4>
                    <p>Message</p>
                </div>
                <div className={d.dialog__messages-item}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                    <h4>Igor</h4>
                    <p>Message</p>
                </div>
            </div>
        </div>
    )
}

export default Dialog;