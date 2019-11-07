import React from 'react';
import u from './Users.module.css'

const Users = (props) => {
    // debugger
    // props.setUsers(users: [
    //     { id: 1, fullname: 'Vasso Teroristo', located: { country: 'Ukraine', town: 'Kharkov' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss' },
    //     { id: 2, fullname: 'Borya', located: { country: 'Ukraine', town: 'Kiev' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss two' },
    //     { id: 3, fullname: 'Tioman', located: { country: 'Ukraine', town: 'Dnepr' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
    //     { id: 4, fullname: 'Murcepan', located: { country: 'Austria', town: 'Oldtown' }, followStatus: true, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss three' },
    //     { id: 5, fullname: 'Murces', located: { country: 'Ukraine', town: 'Odessa' }, followStatus: false, src: 'https://proimg.ru/wp-content/uploads/2017/10/8cb.jpg', aboutMe: 'I am a Boss four' }
    // ]
    // )

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
                                :<button onClick={() => {debugger;props.unfollow(user.id)}}>Unfollow</button>}
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