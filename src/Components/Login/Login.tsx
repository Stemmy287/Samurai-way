import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {LoginPropsType} from "./LoginContainer";
import {Redirect} from "react-router-dom";



export const Login: FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        let {login, password, rememberMe} = formData
        props.LoginThunk(login, password, rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

