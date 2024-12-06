import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css'

const Header = () => {
    return (
        <header >
            <h1>Kinopoisk | Redux</h1>
            <Link className={s.home} to={'/'}>Home</Link>
        </header>
    );
};

export default Header;