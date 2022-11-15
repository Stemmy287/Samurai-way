import s from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionType, messagePageType} from "../../redux/state";
import React, {ChangeEvent} from 'react'
import {addMessageCreator, changeNewMessageCreator} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    messagesPage: messagePageType
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsItem = props.messagesPage.dialogDate.map(el => <DialogItem ava={el.ava} key={el.id} name={el.name}
                                                                          id={el.id}/>);
    let messagesItem = props.messagesPage.messageDate.map(el =>
        <MessageItem key={el.id} message={el.message}/>
    );

    const onClickHandler = () => {
        props.dispatch(addMessageCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageCreator(e.currentTarget.value))
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItem}
                </div>
                <div className={s.messagesItems}>
                     <div>{messagesItem}</div>
                    <textarea onChange={onChangeHandler} value={props.messagesPage.newMessageText}></textarea>
                    <button onClick={onClickHandler}>add</button>
                </div>
            </div>
    )
}


export default Dialogs