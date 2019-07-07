import React from 'react';
import p from './Profile.module.css';
import Posts from './My Posts/Posts';



const Profile = () =>{
    return(
        <section>
                <div className={p.content__img}>
                    <img src='http://www.generium.ru/images/nosologies.png'/>
                </div>
                {/* <hr/> */}
                <div className={p.information}>
                    <div className={p.logo}>
                        <img src='https://s.tcdn.co/a5a/fe4/a5afe471-fd42-39af-9412-f4a690f0179c/8.png'/>
                    </div>
                    <div className={p.information__description}>
                        <h3>Vasso Kolbasso</h3>
                        <p>Doctor-reanimate</p>
                        <p>Дата рождения: 27.08.90</p>
                        <p>Город: California</p>
                        <p>Образование: Harvard</p>
                        <p>Веб сайт: Sabina.ua</p>
                    </div>
                </div>
            <Posts />
        </section>
    );
}

export default Profile;