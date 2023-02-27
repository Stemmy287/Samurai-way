import React, {ChangeEvent, FC, useState} from 'react';
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";
import ava from '../../../assets/images/149071.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHook";
import {ProfileData} from "./profileData/ProfileData";
import {ProfileDataFormReduxForm, ProfileDataFormType} from "./profileDataForm/ProfileDataForm";
import s from './TopInfo.module.scss'

type TopInfoTypeProps = {
  profile: ProfileType
  status: string | null
  updateStatus: (title: string | null) => void
  isOwner: boolean
  savePhoto: (img: File) => void
  saveProfile: (profile: ProfileDataFormType) => void
  isEdit: 'none' | 'successes'
  setIsEdit: (isEdit: 'none' | 'successes') => void
}

export const ProfileInfo: FC<TopInfoTypeProps> = ({
                                                    profile,
                                                    status,
                                                    updateStatus,
                                                    isOwner,
                                                    savePhoto,
                                                    saveProfile,
                                                    isEdit,
                                                    setIsEdit
                                                  }) => {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData: ProfileDataFormType) => {
    saveProfile(formData)
    if (isEdit === 'successes')
      setEditMode(false)
  }

  return (
    <div className={s.profileInfoContainer}>
        <div className={s.ava}>
          <img alt='' src={profile.photos?.large || ava}/>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          {isOwner &&
              <div>
                  <input id={'file'} type={'file'} onChange={mainPhotoSelected}/>
                  <label htmlFor='file'>upload photo</label>
              </div>
          }</div>

        {editMode ? <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit}/> :
          <ProfileData goToEditMode={() => {
            setIsEdit('none')
            setEditMode(true)
          }} profile={profile} isOwner={isOwner}/>}
    </div>
  )
}

