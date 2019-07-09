import React from 'react';
import d from './../Dialog/Dialog.module.css'

const Dialog = (prorps) =>{
    return(
        <div className={d.dialog_Wraper}>
            <div className={d.dialog}>
                <h1>DIALOGS</h1>
                <div className={d.dialog__messages}>
                    <div className={d.dialog__messages_item}>
                        <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                        <h4>Ivan Durak</h4>
                    </div>
                    <div className={d.dialog__messages_item}>
                        <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                        <h4>Igor Pupkin</h4>
                    </div>
                    <div className={d.dialog__messages_item}>
                        <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                        <h4>Anton Savok</h4>
                    </div>
                    <div className={d.dialog__messages_item}>
                        <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar"/>
                        <h4>Victor Blud</h4>
                    </div>
                </div>
            </div>

            <div className={d.message}>

            </div>
        </div>
    )
}

export default Dialog;