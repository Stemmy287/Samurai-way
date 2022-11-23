import React from 'react';
import {friendsPageType} from "../../../redux/store";
import {FriendsNavBarItems} from "./FriendsNavBarItems";
import {ReduxStoreType} from "../../../redux/reduxStore";
import {FriendsNavBar} from "./FriendsNavBar";


type FriendsPropsType = {
    store: ReduxStoreType
}

export const FriendsNavBarContainer = (props: FriendsPropsType) => {

    const state = props.store.getState()

    return (<FriendsNavBar state={state.friendsPage.friendsDate}/>);
}

