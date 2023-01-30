import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, FormControlsInput} from "../common/FormControls/FormControlsTextarea";
import {maxLengthVC, required} from "../../utils/validators/validators";
import s from '../../Components/common/FormControls/formControls.module.css'

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

let maxLengthTwenty = maxLengthVC(20)

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('login', FormControlsInput, {validate: [required, maxLengthTwenty], placeholder: 'login'})}
            {createField('password', FormControlsInput, {
                type: 'password',
                validate: [required, maxLengthTwenty],
                placeholder: 'password'
            })}
            {createField('rememberMe', FormControlsInput, {type: 'checkbox'}, 'remember me')}
            {error && <div className={s.formSummeryError}>{error}</div>}
            <button>Login</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

