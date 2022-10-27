import React from 'react';

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
}

export type messagePageType = {
    dialogDate: dialogDateType[]
    messageDate: messageDate[]
}

export type friendsDateType = {
    id: number
    name: string
    ava: string
}

export type postDateType = {
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

export let state: stateType = {
    profilePage: {
        postDate: [
            {message: 'Hi, how are you?', likeCounter: 15},
            {message: 'It\'s my first post', likeCounter: 20}
        ]
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
    }
}