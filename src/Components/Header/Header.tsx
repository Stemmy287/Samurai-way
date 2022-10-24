import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Logo_1x1.jpg/1024px-Logo_1x1.jpg"/>
        </header>
    );
}

export default Header;