import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {LoginPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";
import s from './login.module.scss'

export const Login: FC<LoginPropsType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    let {login, password, rememberMe, captcha} = formData
    props.LoginThunk(login, password, rememberMe, captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  const captcha = {
    login: '',
    captchaUrl: props.captchaUrl
  }

  return (
    <div className={s.loginContainer}>
      <h1>Welcome</h1>
      <LoginReduxForm initialValues={captcha} onSubmit={onSubmit}/>
    </div>

  );
};

