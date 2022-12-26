import {ActionType} from "./store";
import {Dispatch} from "redux";
import {userApi} from "../api/api";


export type getUsersResponseType = {
    items: Array<itemType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type itemType = {
    followed: boolean
    id: number
    name: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    uniqueUrlName: null | string


}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState: getUsersResponseType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionType): getUsersResponseType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case UNFOLLOW:
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case SET_USERS:
            return {...state, items: [...action.items]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export const follow = (Id: number) => ({type: FOLLOW, userId: Id})
export const unFollow = (Id: number) => ({type: UNFOLLOW, userId: Id})
export const setUsers = (items: itemType[]) => ({type: SET_USERS, items})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount})
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingInProgress = (isFetching: boolean, id: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    id
})

export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    userApi.getUsers(currentPage, pageSize).then(
        response => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setUsersTotalCount(response.totalCount))
        })
}


export const unFollowUserThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    userApi.unFollowUsers(userId).then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        })
}

export const followUserThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId))
    userApi.followUsers(userId).then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
                dispatch(setFollowingInProgress(false, userId))
            }
        })
}






