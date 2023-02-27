import {authApi, securityApi} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppReduxType} from "./reduxStore";
import {stopSubmit} from "redux-form";

type ActionType = SetUserDataActionType | ReturnType<typeof getCaptchaSuccess>

type SetUserDataActionType = {
  type: 'AUTH/SET_USER_DATA'
  data: {
    userId: number
    login: string
    email: string
    isAuth: boolean
  }
}

export type AuthStateType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  captcha: string
}

const initialState: AuthStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: ''
}

export const authReducer = (state = initialState, action: ActionType): AuthStateType => {
  switch (action.type) {
    case 'AUTH/SET_USER_DATA':
      return {...state, ...action.data}
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {...state, captcha: action.captchaUrl}
    default:
      return state
  }
}

export const setUserData = (userId: number, login: string, email: string, isAuth: boolean): SetUserDataActionType => ({
  type: 'AUTH/SET_USER_DATA',
  data: {userId, login, email, isAuth}
})

export const getCaptchaSuccess = (captchaUrl: string) => ({
  type: 'GET_CAPTCHA_URL_SUCCESS',
  captchaUrl
} as const)

export const AuthThunk = () => async (dispatch: Dispatch) => {
  const res = await authApi.authMe()
  if (res.data.resultCode === 0) {
    let {id, login, email} = res.data.data
    dispatch(setUserData(id, login, email, true))

  }
}

export const LoginThunk = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<void, AppReduxType, unknown, AnyAction> => async (dispatch) => {
  const res = await authApi.login(email, password, rememberMe, captcha)
  if (res.data.resultCode === 0) {
    dispatch(AuthThunk())
  } else {
    if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}

export const getCaptchaUrl = (): ThunkAction<void, AppReduxType, unknown, AnyAction> => async (dispatch) => {
  const res = await securityApi.getCaptcha()
  dispatch(getCaptchaSuccess(res.data.url))
}

export const LogoutThunk = (): ThunkAction<void, AppReduxType, unknown, AnyAction> => async (dispatch) => {
  const res = await authApi.logout()
  if (res.data.resultCode === 0) {
    dispatch(setUserData(-1, '', '', false))
  }
}