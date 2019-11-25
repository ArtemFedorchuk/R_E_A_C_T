import React from 'react';
import n from './../News/News.module.css'

const News = (props) => {
    return (
        <div>
            <div className={n.news}>
                <h1>News</h1>
                <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="cat" />
                <div>
                    <p>This is my News!</p>
                    <p><cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Adipisci consequuntur nostrum nesciunt molestias, deleniti temporibus, <br />
                        iste, rem quibusdam dolorum ratione exercitationem quos <br />
                        in inventore quod fuga eligendi est ad iure?</cite></p>
                </div>
            </div>
        </div>
    )
}

export default News;