import React from 'react';
import u from './Users.module.css'

const Users = (props) => {
    debugger

    return (
        <div>
            <div><h3 className={u.h3}>Users</h3></div>
            <div>
                <image src="props.src" alt="user-photo"/>
            </div>
        </div>
    )
}
export default Users