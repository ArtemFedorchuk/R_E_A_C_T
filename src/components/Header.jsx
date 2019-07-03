import React from 'react';
import s from './../components/Header.module.css'

const Header = () =>{
    return(
      <header className={s.header}>
        <img src='https://www.edx.org/sites/default/files/edx-logo-registered.png'/>
      </header>
    );
}

export default Header;