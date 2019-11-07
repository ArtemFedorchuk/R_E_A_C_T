import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followAC, unfollowAC } from '../../Redux/user-Reducer'


const userCont = (props) => {
    // debugger

    return(
        <Users {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users


    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) =>{
            dispatch(followAC(id))
        },

        unfollow: (id) =>{
            dispatch(unfollowAC(id))
        }
    }
}

const userContainer = connect(mapStateToProps, mapDispatchToProps)(userCont)

export default userContainer
