import React from 'react'
import {addMessageCreator, changeNewMessageCreator} from "../../redux/dialogReducer";
import {ReduxStoreType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    const changeNewMessage = (text: string) => {
        props.store.dispatch(changeNewMessageCreator(text))
    }

    return (

            <Dialogs changeNewMessage={changeNewMessage} addMessage={addMessage} dialogs={state.messagesPage.dialogDate} messages={state.messagesPage.messageDate} newMessageText={state.messagesPage.newMessageText}/>
    )
}