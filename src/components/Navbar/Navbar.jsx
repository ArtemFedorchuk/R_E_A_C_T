import React from 'react';
import n from './Navbar.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className={n.nav}>
            <div className="nav__item">
                <a href="#">Profile</a>
            </div>
            <div className="nav__item">
                <a href="#">Messages</a>
            </div>
            <div className="nav__item">
                <a href="#">News</a>
            </div>
            <div className="nav__item">
                <a href="#">Music</a>
            </div>
            <div className="nav__item"> 
            <   a href="#">Setting</a>
            </div>
        </nav>
    );
}

export default Navbar;