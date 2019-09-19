import React from 'react'
import p from './../ProfileInfo/ProfileInfo.module.css'

const ProfileInfo = (props) => {
    // debugger
    // console.log()
 
    return(
        <div>
            <div className={p.content__img}>
                    <img alt='logo' src='http://www.generium.ru/images/nosologies.png'/>
                </div>
                {/* <hr/> */}
                <div className={p.information}>
                    <div className={p.logo}>
                        <img alt='logo' src='https://cdn.segodnya.ua/img/article/11212/90_ls.1520759066.jpg'/>
                    </div>
                    <div className={p.information__description}>
                        <h3>{props.state.profilePage.profileInfo[0].name}</h3>
                        <p>Специальность: {props.state.profilePage.profileInfo[1].special}</p>
                        <p>Дата рождения: {props.state.profilePage.profileInfo[2].date}</p>
                        <p>Город: {props.state.profilePage.profileInfo[3].town}</p>
                        <p>Образование: {props.state.profilePage.profileInfo[4].schoоl}</p>
                        <p>Веб сайт: {props.state.profilePage.profileInfo[5].website}</p>
                    </div>
                </div>
        </div>
    )
}

export default ProfileInfo
