import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
    return (
        <ul className='Navbar--wrapper'>
            <li><NavLink activeClassName='Navbar--active' to="/" exact>Главная</NavLink></li>
            <li><NavLink activeClassName='Navbar--active' to="/menu">Меню</NavLink></li>
            <li><NavLink activeClassName='Navbar--active' to="/about">О нас</NavLink></li>
            <li><NavLink activeClassName='Navbar--active' to="/contacts">Контакты</NavLink></li>
        </ul>
    );
};

export default NavBar;