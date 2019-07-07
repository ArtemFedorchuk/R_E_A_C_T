import React from 'react';
import n from './../News/News.module.css'

const News = (prorps) => {
    return(
        <div>
            <div className={n.news}>
                <h1>News</h1>
                <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="cat"/>
            </div>
        </div>
    )
}

export default News;