import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import TopInfo from './TopInfo/TopInfo';
import {ActionType, profilePageType} from "../../redux/state";


type ProfileTypeProps = {
    profilePage: profilePageType
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfileTypeProps) => {

    return (
        <div className={s.content}>
            <TopInfo topImg={'https://www.w3schools.com/css/img_5terre_wide.jpg'} info={'img'}/>
            <MyPosts dispatch={props.dispatch} profilePage={props.profilePage}/>
        </div>
    );
}


export default Profile;