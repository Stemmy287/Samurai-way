import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import {FriendsNavBar} from "./FriendNavBar/FriendsNavBar";
import {ReduxStoreType} from "../../redux/reduxStore";
import {FriendsNavBarContainer} from "./FriendNavBar/FriendsNavBarContainer";

type FriendsPropsType = {
    store: ReduxStoreType
}

const NavBar = (props: FriendsPropsType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.itemSettings}`}>
                <NavLink to={'settings'}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.itemFriends}`}>
                <NavLink to={'friends'}>Friends</NavLink>
                <FriendsNavBarContainer store={props.store}/>
            </div>
        </nav>
    );
}

export default NavBar;