import React, {FC} from 'react';
import {createField, FormControlsInput, FormControlsTextarea} from "../../../common/FormControls/FormControlsTextarea";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../redux/profileReducer";
import s from "../../../common/FormControls/formControls.module.scss";


export type ProfileDataFormType = {
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  aboutMe: string
}

export const ProfileDataForm: FC<InjectedFormProps<ProfileDataFormType>> = ({handleSubmit,initialValues, error}) => {
  const profile = initialValues as ProfileType
  return (
    <form onSubmit={handleSubmit} className={s.editInfo}>
      <div>
        <button className={s.button}>save</button>
      </div>
      {error && <div className={s.formSummeryError}>{error}</div>}
      <div>
        <b>Full name</b>: {createField('fullName', FormControlsInput, {placeholder: 'Full name'})}
      </div>
      <div>
        <b>Looking for a job</b>:{createField('lookingForAJob', FormControlsInput, {type: 'checkbox'})}
      </div>
      <div>
        <b>My professional skills</b>:{createField('lookingForAJobDescription', FormControlsTextarea, {placeholder: 'My professional skills'})}
      </div>
      <div>
        <b>About me</b>: {createField('aboutMe', FormControlsTextarea, {placeholder: 'About me'})}
      </div>
      <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => <div key={key}><b>{key}</b>:{createField('contacts.' + key, FormControlsInput, {placeholder: key})} </div>)}
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType>({form: 'editProfile'})(ProfileDataForm)

