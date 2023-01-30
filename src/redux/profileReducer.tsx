import {
    ActionType,
    AddPostActionType,
    ChangeNewPostActionType,
    SetStatusActionType,
    SetUserProfileActionType, UpdateStatusActionType
} from "./store";
import {Dispatch} from "redux";
import {profileApi, userApi} from "../api/api";

export type ProfilePageType = {
    postDate: postDateType[]
    profile: ProfileType | null
    status: string | null
}

export type postDateType = {
    id: number
    message: string
    likeCounter: number
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type ProfileType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: PhotosType
}

let initialState: ProfilePageType = {
    postDate: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 15},
        {id: 2, message: 'It\'s my first post', likeCounter: 20}
    ],
    profile: null,
    status: null
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postDateType = {
                id: 3,
                message: action.newText,
                likeCounter: 0
            }
            return {...state, postDate: [...state.postDate, newPost]}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.title}
        case 'DELETE-POST':
            return {...state, postDate: state.postDate.filter(el => el.id !== action.postId)}
        default :
            return state
    }
}

export const addPostCreator = (newText: string): AddPostActionType => ({type: 'ADD-POST', newText})
export const changeNewPostCreator = (text: string): ChangeNewPostActionType => ({type: 'CHANGE-NEW-POST', text: text})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (title: string | null): SetStatusActionType => ({type: 'SET-STATUS', title})
export const deletePost = (postId: number) => ({type: 'DELETE-POST', postId} as const)

export const getProfileThunk = (userId: string) => async (dispatch: Dispatch) => {
    const res = await userApi.getProfile(userId)
    dispatch(setUserProfile(res.data))
}

export const setStatusThunk = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatus(res.data))

}

export const updateStatusThunk = (title: string | null) => async (dispatch: Dispatch) => {
    const res = await profileApi.updateStatus(title)
    if (res.data.resultCode === 0)
        dispatch(setStatus(title))
}

