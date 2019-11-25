import React from 'react'
import axios from 'axios';
import n from "./News.module.css";
import {connect} from "react-redux";
import {setNewsAC} from "./../../Redux/news-Reducer";

class NewsC extends React.Component{
    // https://social-network.samuraijs.com/api/1.0/users  --this API users
    //  https://kudago.com/public-api/v1.4/movies/  --this API films

    componentDidMount() {
        axios.get('https://kudago.com/public-api/v1.4/movies/')
            .then(response => {
                // debugger
                console.log(response)
                this.props.setNewsAC(response.id)
            } )
    }

    render() {
        return (
            <div>
                <h1>News Film</h1>
                <div className={n.news}>
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
}

let mapStateToProps = (state) => ({
    a:13
});

export default connect (mapStateToProps,{setNewsAC})(NewsC)

