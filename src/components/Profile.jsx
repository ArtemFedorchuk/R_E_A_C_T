import React from 'react';

const Profile = () =>{
    return(
        <section className="content">
            <div className="content__header">
            <img src='http://www.generium.ru/images/nosologies.png'/>
            </div>
            {/* <hr/> */}
            <div className="information">
                <div className="information__content_logo">
                    <img src='https://s.tcdn.co/a5a/fe4/a5afe471-fd42-39af-9412-f4a690f0179c/8.png'/>
                </div>
                <div className="information__description">
                    <h3>Vasso Kolbasso</h3>
                    <p>Дата рождения: 27.08.90</p>
                    <p>Город: California</p>
                    <p>Образование: Harvard</p>
                    <p>Веб сайт: Sabina.ua</p>
                </div>
            </div>
            <div className="post">
            <div className="post__send">
                <h4>My post</h4>
                <input type="textarea" />
                <button type="submit">Send</button>
            </div>
            <div className="post__publick">
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
            </div>
            </div>
        </section>
    );
}

export default Profile;