import React from 'react';
import {FriendsNavBarItems} from "./FriendsNavBarItems";
import {FriendsNavBarPropsType} from "./FriendsNavBarContainer";

export const FriendsNavBar = (props: FriendsNavBarPropsType) => {

    let FriendsNavBarItem = props.friends.map(el => <FriendsNavBarItems key={el.id} ava={el.ava} name={el.name}/>)

    return (
        <div>
            {FriendsNavBarItem}
        </div>
    );
}

