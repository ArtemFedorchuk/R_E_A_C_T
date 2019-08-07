import React from 'react'
import f from './../Friend/Friend.module.css'

const Friend = (props) => {
    return (
        <div>
            <div className={f.user}>
                <img src="http://klakson18.ru/wp-content/uploads/2016/12/06.png" alt="user"/>
                <p>name</p>
            </div>
            <div>
                <p>name</p>
            </div>
        </div>
    )
}

export default Friend