import React from 'react';
import s from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import {AppReduxType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {setUserData} from "../../redux/authReducer";
import axios from "axios";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (userId: number, login: string, email: string) => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderApiContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        }).then(
            response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id,login,email)
                }
            })
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
        setUserData
    }
}

export const HeaderContainer = connect(mapStateToProps, MapDispatchToProps())(HeaderApiContainer)
