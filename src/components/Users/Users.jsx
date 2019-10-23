import React from 'react';
import u from './Users.module.css'

const Users = (props) => {
    debugger


    return (
        <div>
            <div><h3 className={u.h3}>Users</h3></div>
            <div className = { u.wrap_cont }>
                <div className={u.user_wrap}>
                    <img src="https://www.ptichka.ru/data/cache/2018mar/18/35/64148_60448.jpg" className={u.img} alt="user" />
                    <h2 className={u.h2}>{props.users[0].fullname}</h2>
                    <p className={u.located}>{props.users[0].located.country}, {props.users[0].located.town}</p>
                    <p className={u.status}>{props.users[0].aboutMe}</p>
                </div>
                <div className={u.user_wrap}>
                    <img src="https://www.ptichka.ru/data/cache/2018mar/18/35/64148_60448.jpg" className={u.img} alt="user" />
                    <h2 className={u.h2}>{props.users[0].fullname}</h2>
                    <p className={u.located}>{props.users[0].located.country}, {props.users[0].located.town}</p>
                    <p className={u.status}>{props.users[0].aboutMe}</p>
                </div>
                <div className={u.user_wrap}>
                    <img src="https://www.ptichka.ru/data/cache/2018mar/18/35/64148_60448.jpg" className={u.img} alt="user" />
                    <h2 className={u.h2}>{props.users[0].fullname}</h2>
                    <p className={u.located}>{props.users[0].located.country}, {props.users[0].located.town}</p>
                    <p className={u.status}>{props.users[0].aboutMe}</p>
                </div>
                <div className={u.user_wrap}>
                    <img src="https://www.ptichka.ru/data/cache/2018mar/18/35/64148_60448.jpg" className={u.img} alt="user" />
                    <h2 className={u.h2}>{props.users[0].fullname}</h2>
                    <p className={u.located}>{props.users[0].located.country}, {props.users[0].located.town}</p>
                    <p className={u.status}>{props.users[0].aboutMe}</p>
                </div>{/*  */}
            </div>
        </div>
    )
}

export default Users