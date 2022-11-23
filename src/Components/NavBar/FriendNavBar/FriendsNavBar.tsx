import React from 'react';
import {friendsDateType, friendsPageType} from "../../../redux/store";
import {FriendsNavBarItems} from "./FriendsNavBarItems";


type FriendsPropsType = {
    state: friendsDateType[]
}

export const FriendsNavBar = (props: FriendsPropsType) => {

    let FriendsNavBarItem = props.state.map(el => <FriendsNavBarItems key={el.id} ava={el.ava} name={el.name}/>)

    return (
        <div>
            {FriendsNavBarItem}
        </div>
    );
}

