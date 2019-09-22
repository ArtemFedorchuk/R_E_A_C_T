import React from 'react';
import s from './Header.module.css'

const Header = () =>{
    return(
      <header className={s.header}>
        <img src='https://www.edx.org/sites/default/files/edx-logo-registered.png' alt='logo'/>
      </header>
    );
}

export default Header;