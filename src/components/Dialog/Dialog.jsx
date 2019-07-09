import React from 'react';
import d from './../Dialog/Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (prorps) => {
    return (
        <div className={d.dialog_Wraper}>
            <div className={d.dialog}>
                <div className={d.dialog__messages}>
                    <NavLink to='/message_item/1' >
                        <div className={d.dialog__messages_item}>
                            <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar" />
                            <h4>Ivan Durak</h4>
                        </div>
                    </NavLink>

                    <NavLink to='/message_item/2' >
                        <div className={d.dialog__messages_item}>
                            <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar" />
                            <h4>Igor Pupkin</h4>
                        </div>
                    </NavLink>

                    <NavLink to='/message_item/3' >
                        <div className={d.dialog__messages_item}>
                            <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar" />
                            <h4>Anton Savok</h4>
                        </div>
                    </NavLink>

                    <NavLink to='/message_item/4' >
                        <div className={d.dialog__messages_item}>
                            <img src="https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg" alt="avatar" />
                            <h4>Victor Blud</h4>
                        </div>
                    </NavLink>
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