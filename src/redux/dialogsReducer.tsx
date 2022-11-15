import {
    ActionType,
    AddMessageActionType,
    AddPostActionType,
    ChangeNewMessageActionType, ChangeNewPostActionType,
    postDateType,
    profilePageType
} from "./state";

export const profileReducer = (state: profilePageType, action: ActionType) => {
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

export const addMessageCreator = (): AddMessageActionType => ({type: 'ADD-MESSAGE'})

export const changeNewMessageCreator = (text: string): ChangeNewMessageActionType => ({type: 'CHANGE-NEW-MESSAGE', text: text})