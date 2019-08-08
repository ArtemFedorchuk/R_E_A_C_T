import React from 'react'
import f from './../FriendNav/FriendNav.module.css'

const FriendNav = (props) => {
    // debugger
    return (
        <div>
            <div className={f.user}>
                <img src="http://klakson18.ru/wp-content/uploads/2016/12/06.png" alt="user"/>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default FriendNav