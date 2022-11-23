import {friendsPageType} from "./store";

let initialState = {
    friendsDate: [
        {id: 1, name: 'Sveta', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
        {id: 2, name: 'Dima', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
        {id: 3, name: 'Valera', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
    ]
}
export const friendReducer = (state: friendsPageType = initialState) => {
    return state
}
