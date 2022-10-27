import React from 'react';
import s from './FriendsNavBarItems.module.css'

type FriendsNavBarItemPropsType = {
    ava: string
    name: string
}

export const FriendsNavBarItems = (props: FriendsNavBarItemPropsType) => {
    return (
        <div className={s.friendNavBarItem}>
            <img src={props.ava}/>
            <div>{props.name}</div>
        </div>
    );
};

