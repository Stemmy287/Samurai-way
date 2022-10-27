import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import TopInfo from './TopInfo/TopInfo';
import {postDateType, profilePageType} from "../../redux/state";


type ProfileTypeProps = {
    state: profilePageType
}

const Profile = (props: ProfileTypeProps) => {

    return (
        <div className={s.content}>
            <TopInfo topImg={'https://www.w3schools.com/css/img_5terre_wide.jpg'} info={'img'}/>
            <MyPosts postDate={props.state.postDate}/>
        </div>
    );
}


export default Profile;