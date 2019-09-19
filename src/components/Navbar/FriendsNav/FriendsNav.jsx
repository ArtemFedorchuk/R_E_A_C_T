import React from 'react'
import f from './../FriendsNav/FriendsNav.module.css'
import { NavLink } from "react-router-dom"
import Friend from './FriendNav/FriendNav'

const FriendsNav = (props) => {
    // debugger
    let Friends = props.state.navbar.friends.map( (f) => <Friend name={f.name} />)
    return(
        <div>
            <div className={f.friends}>
            <hr/>
                <NavLink to="/Friends" activeClassName={f.activeLink}>Friends</NavLink>
                <div className={f.friend__wraper}>
                    {/* <Friend /> */}
                    {Friends}
                </div>
            </div>
        </div>
    )
} 
export default FriendsNav