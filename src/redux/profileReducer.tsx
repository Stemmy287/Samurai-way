import {
    ActionType,
    AddMessageActionType,
    AddPostActionType,
    ChangeNewMessageActionType, ChangeNewPostActionType,
    messagePageType
} from "./state";

export const dialogsReducer = (state: messagePageType, action: ActionType) => {

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

export const addPostCreator = (): AddPostActionType => ({type: 'ADD-POST'})

export const changeNewPostCreator = (text: string): ChangeNewPostActionType => ({type: 'CHANGE-NEW-POST', text: text})