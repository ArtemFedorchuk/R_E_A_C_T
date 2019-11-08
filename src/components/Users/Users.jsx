import React from 'react';
import u from './Users.module.css'
import axios from 'axios';

const Users = (props) => {
    debugger

   if(props.users.length === 0 ){
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
        debugger
        props.setUsers()
    })
   }

    let users = props.users.map((user) => {

        return (
            <div key={user.id}>
                <div className={u.wrap_cont}>
                    <div className={u.user_wrap}>
                        <img src="https://www.ptichka.ru/data/cache/2018mar/18/35/64148_60448.jpg" className={u.img} alt="user" />
                        <h2 className={u.h2}> {user.fullname}</h2>
                        <p className={u.located}> {user.located.country}, {user.located.town}</p>
                        <p className={u.status}> {user.aboutMe}</p>
                        <div>
                            {user.followStatus
                                ?<button onClick={() => {props.follow(user.id)}}>Follow</button>
                                :<button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>}
                        </div>
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
                <button> Show more <span>&#8634;</span></button>
            </div>
        </div>
    )

}

export default Users