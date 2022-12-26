import React, {Dispatch} from 'redux'
import {addMessageCreator, changeNewMessageCreator, DialogDateType, MessageDateType,} from "../../redux/dialogReducer";
import {AppReduxType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialogs: DialogDateType[],
    messages: MessageDateType[],
    newMessageText: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void,
    changeNewMessage: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogDate,
        messages: state.dialogsPage.messageDate,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        changeNewMessage: (text: string) => {
            dispatch(changeNewMessageCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)