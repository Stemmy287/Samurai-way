import React from 'react';
import s from './Header.module.scss';
import {HeaderPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";
import ava from '../../assets/images/149071.png'

const Header: React.FC<HeaderPropsType> = (props) => {

  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
        {props.isAuth ? <div className={s.userMenu}><img src={props.photo?.small || ava} alt=""/>
          <div className={s.userName}> {props.login} </div>
        </div> : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;