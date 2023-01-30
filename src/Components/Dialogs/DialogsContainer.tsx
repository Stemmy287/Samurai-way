import React, {compose, Dispatch} from 'redux'
import {addMessageCreator, DialogDateType, MessageDateType,} from "../../redux/dialogReducer";
import {AppReduxType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {ComponentType} from "react";

type MapStateToPropsType = {
    dialogs: DialogDateType[],
    messages: MessageDateType[]
}

type MapDispatchToPropsType = {
    addMessage: (newText: string) => void,
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogDate,
        messages: state.dialogsPage.messageDate
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newText: string) => {
            dispatch(addMessageCreator(newText))
        }
    }
}

export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

