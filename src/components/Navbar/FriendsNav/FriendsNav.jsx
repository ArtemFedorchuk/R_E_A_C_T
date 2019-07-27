import React from 'react'
import f from './../FriendsNav/FriendsNav.module.css'
import { NavLink } from "react-router-dom"
import Friend from './Friend/Friend'

const FriendsNav = (props) => {
    return(
        <div>
            <div className={f.friends}>
            <hr/>
                <NavLink to="/Friends" activeClassName={f.activeLink}>Friends</NavLink>
                <div className={f.friend__wraper}>
                    <Friend />
                    <Friend />
                    <Friend />
                </div>
            </div>
        </div>
    )
} 
export default FriendsNav