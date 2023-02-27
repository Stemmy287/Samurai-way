import React from 'react';
import {deletePost, profileReducer, ProfileType, savePhotoSuccess, setIsEdit} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {itemType} from "./usersReducer";

export type storeType = {
    _state: stateType
    getState: () => stateType
    subscribe: (callback: () => void) => void
    _callSubscriber: (state: stateType) => void
    dispatch: (action: ActionType) => void
}

export type stateType = {
    profilePage: profilePageType
    messagesPage: messagePageType
    friendsPage: friendsPageType
}

type friendsPageType = {
    friendsDate: friendsDateType[]
}

type profilePageType = {
    postDate: postDateType[]
    profile: ProfileType
    status: string | null
    isEdit: 'none' | 'successes'
}

type messagePageType = {
    dialogDate: dialogDateType[]
    messageDate: messageDate[]
}

type friendsDateType = {
    id: number
    name: string
    ava: string
}

type postDateType = {
    id: number
    message: string
    likeCounter: number
}

type dialogDateType = {
    name: string
    id: number
    ava: string
}

type messageDate = {
    message: string
    id: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
    newText: string
}

export type ChangeNewPostActionType = {
    type:'CHANGE-NEW-POST'
    text: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    newText: string
}

export type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE'
    text: string
}

export type FollowType = {
    type: 'FOLLOW'
    userId: number
}

export type UnfollowType = {
    type: 'UNFOLLOW'
    userId: number
}

export type SetUsersType = {
    type: 'SET_USERS'
    items: itemType[]
}

export type SetCurrentPage = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

export type SetUsersTotalCount = {
    type: 'SET_USERS_TOTAL_COUNT'
    totalUsersCount: number
}

export type ToggleIsFetchingType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}

export type SetFollowingInProgress = {
    type: 'FOLLOWING_IN_PROGRESS',
    isFetching: boolean,
    id: number
}

export type SetStatusActionType = {
    type: 'SET-STATUS',
    title: string | null
}

export type UpdateStatusActionType = {
    type: 'UPDATE-STATUS'
    title: string | null
}

export type ActionType = AddPostActionType |
    ChangeNewPostActionType |
    AddMessageActionType |
    ChangeNewMessageActionType |
    FollowType |
    UnfollowType |
    SetUsersType |
    SetCurrentPage |
    SetUsersTotalCount |
    ToggleIsFetchingType |
    SetUserProfileActionType |
    SetFollowingInProgress |
    SetStatusActionType |
    UpdateStatusActionType |
    ReturnType<typeof deletePost> |
    ReturnType<typeof savePhotoSuccess> |
    ReturnType<typeof setIsEdit>


export let store: storeType = {
    _state: {
        profilePage: {
            postDate: [
                {id: 1, message: 'Hi, how are you?', likeCounter: 15},
                {id: 2, message: 'It\'s my first post', likeCounter: 20}
            ],
            profile: {} as ProfileType,
            status: null,
            isEdit: 'none'
        },
        messagesPage: {
            dialogDate: [
                {name: 'Sveta', id: 1, ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
                {name: 'Dima', id: 2, ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
                {name: 'Valera', id: 3, ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
                {name: 'Gena', id: 4, ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
                {name: 'Vova', id: 5, ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
            ],
            messageDate: [
                {message: 'Hello', id: 1},
                {message: 'How are you?', id: 2},
                {message: 'Hoe', id: 3},
            ]
        },
        friendsPage: {
            friendsDate: [
                {id: 1, name: 'Sveta', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
                {id: 2, name: 'Dima', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
                {id: 3, name: 'Valera', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
            ]
        }},
    getState() {
        return this._state
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    },
    _callSubscriber(state?: stateType) {
    }
}







