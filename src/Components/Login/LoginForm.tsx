import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, FormControlsInput} from "../common/FormControls/FormControlsTextarea";
import {maxLengthVC, required} from "../../utils/validators/validators";
import s from '../common/FormControls/formControls.module.scss'
import style from './login.module.scss'

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}

let maxLengthTwenty = maxLengthVC(20)

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error, initialValues}) => {

    const captcha = initialValues as {login: string, captchaUrl: string}

    return (
        <form onSubmit={handleSubmit}>
            {createField('login', FormControlsInput, {validate: [required, maxLengthTwenty], placeholder: 'email'})}
            {createField('password', FormControlsInput, {
                type: 'password',
                validate: [required, maxLengthTwenty],
                placeholder: 'password'
            })}
            {createField('rememberMe', FormControlsInput, {type: 'checkbox'}, 'Remember me')}
            {captcha.captchaUrl && <img src={captcha.captchaUrl} alt=""/>}
            {captcha.captchaUrl &&  createField('captcha', FormControlsInput, {placeholder: 'Symbols from image'})}
            {error && <div className={s.formSummeryError}>{error}</div>}
            <button className={style.button}>Log into your account</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

