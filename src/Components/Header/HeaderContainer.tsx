import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppReduxType} from "../../redux/reduxStore";
import {AuthThunk, LogoutThunk, setUserData} from "../../redux/authReducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (userId: number, login: string, email: string, isAuth: boolean) => void
    LogoutThunk: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderApiContainer extends React.Component<HeaderPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const MapDispatchToProps = (): MapDispatchToPropsType => {
    return {
        setUserData,
        LogoutThunk
    }
}

export const HeaderContainer = connect(mapStateToProps, MapDispatchToProps())(HeaderApiContainer)
