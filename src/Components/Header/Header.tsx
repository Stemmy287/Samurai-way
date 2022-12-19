import React from 'react';
import s from './Header.module.css';
import {HeaderPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

const Header: React.FC <HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Logo_1x1.jpg/1024px-Logo_1x1.jpg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;