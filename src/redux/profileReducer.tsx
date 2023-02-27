import {
  ActionType,
  AddPostActionType,
  ChangeNewPostActionType,
  SetStatusActionType,
  SetUserProfileActionType
} from "./store";
import {Dispatch} from "redux";
import {profileApi, userApi} from "../api/api";
import {ProfileDataFormType} from "../Components/Profile/TopInfo/profileDataForm/ProfileDataForm";
import {AppReduxType, AppThunkDispatchType} from "./reduxStore";
import {stopSubmit} from "redux-form";

export type ProfilePageType = {
  postDate: postDateType[]
  profile: ProfileType
  status: string | null,
  isEdit: 'none' | 'successes'
}

export type postDateType = {
  id: number
  message: string
  likeCounter: number
}

export type ContactsType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}

export type PhotosType = {
  small: string | null
  large: string | null
}

export type ProfileType = {
  aboutMe: string
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotosType
}

let initialState: ProfilePageType = {
  postDate: [
    {id: 1, message: 'Hi, how are you?', likeCounter: 15},
    {id: 2, message: 'It\'s my first post', likeCounter: 20}
  ],
  profile: {} as ProfileType,
  status: null,
  isEdit: 'none'
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
    case 'SAVE-PHOTO-SUCCESS':
      return {...state, profile: {...state.profile, photos: action.photos}}
    case 'SET-IS-EDIT':
      return {...state, isEdit: action.isEdit}
    default :
      return state
  }
}

export const addPostCreator = (newText: string): AddPostActionType => ({type: 'ADD-POST', newText})
export const changeNewPostCreator = (text: string): ChangeNewPostActionType => ({type: 'CHANGE-NEW-POST', text: text})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (title: string | null): SetStatusActionType => ({type: 'SET-STATUS', title})
export const deletePost = (postId: number) => ({type: 'DELETE-POST', postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'SAVE-PHOTO-SUCCESS', photos} as const)
export const setIsEdit = (isEdit: 'none' | 'successes') => ({type: 'SET-IS-EDIT', isEdit} as const)

export const getProfileThunk = (userId: number) => async (dispatch: Dispatch) => {
  const res = await userApi.getProfile(userId)
  dispatch(setUserProfile(res.data))
}

export const setStatusThunk = (userId: number) => async (dispatch: Dispatch) => {
  const res = await profileApi.getStatus(userId)
  dispatch(setStatus(res.data))
}

export const updateStatusThunk = (title: string | null) => async (dispatch: Dispatch) => {
  const res = await profileApi.updateStatus(title)
  if (res.data.resultCode === 0)
    dispatch(setStatus(title))
}

export const savePhotoThunk = (img: File) => async (dispatch: Dispatch) => {
  const res = await profileApi.savePhoto(img)
  if (res.data.resultCode === 0)
    dispatch(savePhotoSuccess(res.data.data.photos))
}

export const saveProfileThunk = (profile: ProfileDataFormType): AppThunkDispatchType => async (dispatch, getState: () => AppReduxType) => {
  const userId = getState().auth.userId
  if (userId) {
    const res = await profileApi.saveProfile(profile)
    if (res.data.resultCode === 0) {
      await dispatch(getProfileThunk(userId))
      dispatch(setIsEdit('successes'))
    } else {
      dispatch(stopSubmit('editProfile', {_error: res.data.messages[0]}))
    }
  }
}

