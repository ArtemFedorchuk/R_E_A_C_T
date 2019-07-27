import React from 'react';
import p from './Profile.module.css';
import Posts from './My Posts/Posts';



const Profile = (props) =>{
    // console.log(props.state)
    return(
        <section>
                <div className={p.content__img}>
                    <img src='http://www.generium.ru/images/nosologies.png'/>
                </div>
                {/* <hr/> */}
                <div className={p.information}>
                    <div className={p.logo}>
                        <img src='https://cdn.segodnya.ua/img/article/11212/90_ls.1520759066.jpg'/>
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
            <Posts addPost={props.addPost} state={props.state} />
        </section>
    );
}

export default Profile;