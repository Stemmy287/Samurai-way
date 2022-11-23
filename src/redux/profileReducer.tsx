import {ActionType, AddPostActionType, ChangeNewPostActionType, postDateType, profilePageType} from "./store";

let initialState = {
    postDate: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 15},
        {id: 2, message: 'It\'s my first post', likeCounter: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state: profilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: postDateType = {
                id: 3,
                message: state.newPostText,
                likeCounter: 0
            }
            state.postDate.push(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-POST':
            state.newPostText = action.text
            return state
        default :
            return state
    }
}





export const addPostCreator = (): AddPostActionType => ({type: 'ADD-POST'})

export const changeNewPostCreator = (text: string): ChangeNewPostActionType => ({type: 'CHANGE-NEW-POST', text: text})