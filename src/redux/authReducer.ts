import {authApi} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppReduxType} from "./reduxStore";
import {stopSubmit} from "redux-form";

type ActionType = SetUserDataActionType

type SetUserDataActionType = {
    type: 'AUTH/SET_USER_DATA'
    data: {
        userId: number
        login: string
        email: string,
        isAuth: boolean
    }
}

export type AuthStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: AuthStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

export const setUserData = (userId: number, login: string, email: string, isAuth: boolean): SetUserDataActionType => ({
    type: 'AUTH/SET_USER_DATA',
    data: {userId, login, email, isAuth}
})

export const AuthThunk = () => async (dispatch: Dispatch) => {
    const res = await authApi.authMe()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setUserData(id, login, email, true))

    }
}

export const LoginThunk = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppReduxType, unknown, AnyAction> => async (dispatch) => {
    const res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(AuthThunk())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const LogoutThunk = (): ThunkAction<void, AppReduxType, unknown, AnyAction> => async (dispatch) => {
    const res = await authApi.logout()
            if (res.data.resultCode === 0) {
                dispatch(setUserData(-1, '', '', false))
            }


}