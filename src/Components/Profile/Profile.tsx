import React from 'react';
import s from './Profile.module.css';
import TopInfo from './TopInfo/TopInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/reduxStore";


type ProfileTypeProps = {
    store: ReduxStoreType
}

const Profile = (props: ProfileTypeProps) => {

    return (
        <div className={s.content}>
            <TopInfo topImg={'https://www.w3schools.com/css/img_5terre_wide.jpg'} info={'img'}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}


export default Profile;