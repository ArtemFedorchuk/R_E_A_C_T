import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'


const userCont = (props) => {

    return(
        <Users {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const userContainer = connect(mapStateToProps, mapDispatchToProps)(userCont)

export default userContainer
