import React, {Component, ComponentType} from 'react';
import {AppReduxType} from "../redux/reduxStore";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

type MapStateToPropsType = {
    isAuth: boolean
}

const MapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const withAuthRedirectContainer = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    } // user

    return connect(MapStateToProps)(withAuthRedirectContainer)

}

