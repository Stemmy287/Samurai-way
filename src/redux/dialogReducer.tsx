import {
    ActionType,
    AddMessageActionType,
    AddPostActionType,
    ChangeNewMessageActionType, ChangeNewPostActionType,
    messagePageType
} from "./store";

let initialState = {
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
}

export const dialogReducer = (state: messagePageType = initialState, action: ActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {message: state.newMessageText, id: 4}
            state.messageDate.push(newMessage)
            state.newMessageText = ''
            return state
        case 'CHANGE-NEW-MESSAGE':
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const addMessageCreator = (): AddMessageActionType => ({type: 'ADD-MESSAGE'})

export const changeNewMessageCreator = (text: string): ChangeNewMessageActionType => ({type: 'CHANGE-NEW-MESSAGE', text: text})