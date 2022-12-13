import React from 'react';
import s from './Profile.module.css';
import TopInfo from './TopInfo/TopInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <TopInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;