import React from 'react';
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";
import {ProfileInfo} from "./TopInfo/ProfileInfo";
import {ProfileDataFormType} from "./TopInfo/profileDataForm/ProfileDataForm";


type ProfilePropsType = {
  profile: ProfileType
  status: string | null
  updateStatus: (title: string | null) => void
  isOwner: boolean
  savePhoto: (img: File) => void
  saveProfile: (profile: ProfileDataFormType) => void
  isEdit: 'none' | 'successes'
  setIsEdit: (isEdit: 'none' | 'successes') => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo setIsEdit={props.setIsEdit} isEdit={props.isEdit} saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner}
                   profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  );
}


export default Profile;