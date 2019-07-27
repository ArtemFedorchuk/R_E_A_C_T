import React from 'react'
import f from './../Friends/Friends.module.css'
import { NavLink } from "react-router-dom"
import Friend from './Friend/Friend'

const Friends = (props) => {
    return(
        <div>
            <div className={f.friends}>
            <h1>***</h1>
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
export default Friends