import React from 'react';
import {FriendsNavBar} from "./FriendsNavBar";
import {connect} from "react-redux";
import {AppReduxType} from "../../../redux/reduxStore";
import {FriendsDateType} from "../../../redux/friendReducer";

type MapStateToPropsType = {
    friends: FriendsDateType[]
}

export type FriendsNavBarPropsType = MapStateToPropsType

const mapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        friends: state.friendsPage.friendsDate
    }
}

export const FriendsNavBarContainer = connect(mapStateToProps)(FriendsNavBar)

