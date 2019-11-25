import React from 'react';
import u from './Users.module.css'
import * as axios from 'axios';
import { NavLink } from "react-router-dom";

class Users extends React.Component {
    // debugger

    componentDidMount(){
        this.props.users.length === 0 ? axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items)) : console.error('API_Err');
    }

    getUsers = () =>{
        let count = 10;
        this.props.users.length === count || 20? axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items)) : console.error('API_Err');
    }

        render(){
            let users = this.props.users.map((user) => {

                return (
                   
                        <div key={user.id}>
                            <div className={u.grid}>
                                <div></div>
                                <div className={u.wrap_cont}>
                                    <div className={u.user_wrap}>
                                    <NavLink to='/user/2' activeClassName={u.activeLink}>
                                        <img src={user.photos.small != null ? user.photos.small : 'https://images.discordapp.net/avatars/589031355829059594/756b9f1e5fb6ce9d77537bc5cfac134f.png?size=512'} className={u.img} alt="user" />
                                    </NavLink>
                                        <h2 className={u.h2}> {user.name}</h2>
                                        {/* <p className={u.located}> {user.located.country}, {user.located.town}</p> */}
                                        <p className={u.status}></p>
                                        <div>
                                            {user.followStatus
                                                ? <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
                                                : <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>}
                                        </div>
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
                        <button onClick={this.getUsers}> Show more <span>&#8634;</span></button>
                    </div>
                </div>
            )
        }
    }


    export default Users