import React from 'react';
import {profileReducer} from "./dialogsReducer";
import dialogs from "../Components/Dialogs/Dialogs";
import {dialogsReducer} from "./profileReducer";

export type storeType = {
    _state: stateType
    getState: () => stateType
    subscriber: (callback: () => void) => void
    _callSubscriber: (state: stateType) => void
    dispatch: (action: ActionType) => void
}

export type stateType = {
    profilePage: profilePageType
    messagesPage: messagePageType
    friendsPage: friendsPageType
}

export type friendsPageType = {
    friendsDate: friendsDateType[]
}

export type profilePageType = {
    postDate: postDateType[]
    newPostText: string
}

export type messagePageType = {
    dialogDate: dialogDateType[]
    messageDate: messageDate[]
    newMessageText: string
}

export type friendsDateType = {
    id: number
    name: string
    ava: string
}

export type postDateType = {
    id: number
    message: string
    likeCounter: number
}



export type dialogDateType = {
    name: string
    id: number
    ava: string
}

export type messageDate = {
    message: string
    id: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewPostActionType = {
    type:'CHANGE-NEW-POST'
    text: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

export type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE'
    text: string
}

export type ActionType = AddPostActionType |
    ChangeNewPostActionType |
    AddMessageActionType |
    ChangeNewMessageActionType

export let store: storeType = {
    _state: {
        profilePage: {
            postDate: [
                {id: 1, message: 'Hi, how are you?', likeCounter: 15},
                {id: 2, message: 'It\'s my first post', likeCounter: 20}
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
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
    subscriber(callback: () => void) {
        this._callSubscriber = callback
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    },
    _callSubscriber(state?: stateType) {
    }
}







