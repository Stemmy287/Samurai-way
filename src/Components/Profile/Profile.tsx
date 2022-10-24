import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import TopInfo from './TopInfo/TopInfo';

const Profile = () => {
    return (
        <div className={s.content}>
            <TopInfo topImg={'https://www.w3schools.com/css/img_5terre_wide.jpg'} info={'img'}/>
            <MyPosts/>
        </div>
    );
}


export default Profile;