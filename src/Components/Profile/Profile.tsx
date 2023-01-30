import React from 'react';
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import TopInfo from "./TopInfo/TopInfo";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string | null
    updateStatus: (title: string | null) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <TopInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;