import React from 'react';
import {friendsPageType} from "../../../redux/state";
import {FriendsNavBarItems} from "./FriendsNavBarItems";


type FriendsPropsType = {
    state: friendsPageType
}

export const FriendsNavBar = (props: FriendsPropsType) => {

    let FriendsNavBarItem = props.state.friendsDate.map(el => <FriendsNavBarItems key={el.id} ava={el.ava} name={el.name}/>)

    return (
        <div>
            {FriendsNavBarItem}
        </div>
    );
}

