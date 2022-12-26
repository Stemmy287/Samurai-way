import React from 'react';
import s from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {AppReduxType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {AuthThunk, setUserData} from "../../redux/authReducer";
import axios from "axios";
import {userApi} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (userId: number, login: string, email: string) => void
    AuthThunk: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderApiContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.AuthThunk()
    }
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
        AuthThunk
    }
}

export const HeaderContainer = connect(mapStateToProps, MapDispatchToProps())(HeaderApiContainer)
