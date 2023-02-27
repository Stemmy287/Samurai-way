import React, {FC} from 'react';
import {Contact} from "../contact/Contact";
import {ContactsType, ProfileType} from "../../../../redux/profileReducer";
import s from './profileData.module.scss'

type ProfileDataType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

export const ProfileData: FC<ProfileDataType> = ({
                                                   profile,
                                                   isOwner,
                                                   goToEditMode
                                                 }) => {

  return (
    <div className={s.profileDataContainer}>
      <div className={s.dataContainer}>
        <div><b>Full name</b>: {profile.fullName}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
            <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
        }
        <div><b>About me</b>: {profile.aboutMe}</div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
      </div>
      <div className={s.contactsContainer}><b>Contacts: </b> {profile.contacts && Object.keys(profile.contacts).map(key => <Contact key={key}
                                                                                                   contactTitle={key}
                                                                                                   contactValue={profile.contacts[key as keyof ContactsType]}/>)}
      </div>
    </div>
  );
};

