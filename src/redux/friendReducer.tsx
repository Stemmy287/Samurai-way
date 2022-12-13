
export type FriendsPageType = {
    friendsDate: FriendsDateType[]
}

export type FriendsDateType = {
    id: number
    name: string
    ava: string
}

let initialState: FriendsPageType = {
    friendsDate: [
        {id: 1, name: 'Sveta', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
        {id: 2, name: 'Dima', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
        {id: 3, name: 'Valera', ava: 'https://ak.picdn.net/contributors/1835936/avatars/thumb.jpg?t=166449382'},
    ]
}

export const friendReducer = (state = initialState): FriendsPageType => {
    return state
}
