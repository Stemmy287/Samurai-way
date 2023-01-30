import {connect} from "react-redux";
import {Login} from "./Login";
import {AppReduxType} from "../../redux/reduxStore";
import {LoginThunk} from "../../redux/authReducer";

type MapStateToProps = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    LoginThunk: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginPropsType = MapDispatchToPropsType & MapStateToProps

const MapStateToProps = (state: AppReduxType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

const MapDispatchToProps = (): MapDispatchToPropsType => {
    return {
        LoginThunk
    }

}

export const LoginContainer = connect(MapStateToProps, MapDispatchToProps())(Login)