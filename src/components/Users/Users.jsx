import React from 'react';
import u from './Users.module.css'

const Users = (props) => {
    debugger

    let users = props.users.map((user) => {
        return (
            <div>
                <div className={u.wrap_cont}>
                    <div className={u.user_wrap}>
                        <img src="https://www.ptichka.ru/data/cache/2018mar/18/35/64148_60448.jpg" className={u.img} alt="user" />
                        <h2 className={u.h2}> {user.fullname}</h2>
                        <p className={u.located}> {user.located.country}, {user.located.town}</p>
                        <p className={u.status}> {user.aboutMe}</p>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div><h3 className={u.h3}> Users </h3></div>
            <div className={u.wrap_cont}>
                {users}
            </div>
            <div className={u.showMoreWrap}>
                <button> Show more <span>&#9850;</span></button>
            </div>
        </div>
    )

}

export default Users