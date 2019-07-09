import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className="nav__item">
                <NavLink to="/Profile" activeClassName={n.activeLink}>Profile</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="/Dialog" activeClassName={n.activeLink}>Messages</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="/News" activeClassName={n.activeLink}>News</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="/Music" activeClassName={n.activeLink}>Music</NavLink>
            </div>
            <div className="nav__item">
                <NavLink to="/Setting" activeClassName={n.activeLink}>Setting</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;