import React from 'react'
import axios from 'axios';
import n from "./News.module.css";
import {connect} from "react-redux";
import {setNewsAC} from "./../../Redux/news-Reducer";
import {NavLink} from "react-router-dom";

class NewsC extends React.Component{
    // https://social-network.samuraijs.com/api/1.0/users  --this API users
    //  https://kudago.com/public-api/v1.4/movies/  --this API films

    componentDidMount() {
        axios.get ('https://kudago.com/public-api/v1.4/movies/')
            .then(response => {
                // debugger
                this.props.setNewsAC(response)
            } )
    }

    render() {
        return (
            <div>
                <h1>News Film</h1>
                <div className={n.news}>
                    <div className={n.imgWraper}>
                        <NavLink to="/News/1" activeClassName={n.activeLink}>
                            <img src="http://gdekoncert.ru/wp-content/uploads/2018/07/1500994114_20171.jpg" alt="cat" />
                        </NavLink>

                        <NavLink to="/News/1" activeClassName={n.activeLink}>
                            <img src="https://proxy11.online.ua/news/r3-2c8c91e63d/680_5b3e0479e6fef.jpg" alt="cat" />
                        </NavLink>
                    </div>
                    <div>
                        <p><h3>This is my news films!</h3></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Adipisci consequuntur nostrum nesciunt molestias, deleniti temporibus, <br />
                            iste, rem quibusdam dolorum ratione exercitationem quos <br />
                            in inventore quod fuga eligendi est ad iure?</p>
                    </div>
                </div>
            </div>
        )

   }
}

let mapStateToProps = (state) => ({
    a:13
});

export default connect (mapStateToProps,{setNewsAC})(NewsC)

