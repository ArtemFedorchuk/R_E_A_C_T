import React from 'react';
// import p from './Profile.module.css';
import Posts from './My Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) =>{
    // debugger
    // console.log(props.state)
    
    return(
        <div>
            <ProfileInfo state={props.state} />
            <Posts state={props.state} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile; 