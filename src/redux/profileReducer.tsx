import {ActionType, AddPostActionType, ChangeNewPostActionType, SetUserProfileActionType} from "./store";
import post from "../Components/Profile/MyPosts/Post/Post";
import {Dispatch} from "redux";
import {userApi} from "../api/api";

export type ProfilePageType = {
    postDate: postDateType[],
    newPostText: string,
    profile: ProfileType | null
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
    ] as postDateType[],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postDateType = {
                id: 3,
                message: state.newPostText,
                likeCounter: 0
            }
            return {...state, postDate: [...state.postDate, newPost], newPostText: ''}
        case 'CHANGE-NEW-POST':
            return {...state, newPostText: action.text}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        default :
            return state
    }
}





export const addPostCreator = (): AddPostActionType => ({type: 'ADD-POST'})
export const changeNewPostCreator = (text: string): ChangeNewPostActionType => ({type: 'CHANGE-NEW-POST', text: text})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: 'SET_USER_PROFILE', profile})

export const getProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    userApi.getProfile(userId).then(
        response => {
            dispatch(setUserProfile(response.data))
        })
}

