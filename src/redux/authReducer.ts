
type ActionType = SetUserDataActionType

type SetUserDataActionType = {
    type: 'SET_USER_DATA'
    data: {
        userId: number
        login: string
        email: string
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
        case 'SET_USER_DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setUserData = (userId: number, login: string, email: string): SetUserDataActionType => ({
    type: 'SET_USER_DATA',
    data: {userId, login, email}
})