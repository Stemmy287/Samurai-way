import {ActionType, AddMessageActionType, ChangeNewMessageActionType} from "./store";

export type DialogsStateType = {
    dialogDate: DialogDateType[]
    messageDate: MessageDateType[]
}

export type DialogDateType = {
    name: string
    id: number
    ava: string
}

export type MessageDateType = {
    message: string
    id: number
}

let initialState: DialogsStateType = {
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
}

export const dialogReducer = (state = initialState, action: ActionType): DialogsStateType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {
                message: action.newText,
                id: 4
            }
            return {...state, messageDate: [...state.messageDate, newMessage]}
        default:
            return state
    }
}

export const addMessageCreator = (newText: string): AddMessageActionType => ({
    type: 'ADD-MESSAGE',
    newText
})
