import s from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogDateType, messageDate} from "../../redux/store";
import React, {ChangeEvent} from 'react'


type DialogsPropsType = {
    addMessage: () => void
    changeNewMessage: (text: string) => void
    dialogs: dialogDateType[]
    messages: messageDate[]
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.dialogs.map(el => <DialogItem ava={el.ava} key={el.id} name={el.name}
                                                                          id={el.id}/>);
    let messagesItem = props.messages.map(el =>
        <MessageItem key={el.id} message={el.message}/>
    );

    const onClickHandler = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItem}
                </div>
                <div className={s.messagesItems}>
                     <div>{messagesItem}</div>
                    <textarea onChange={onChangeHandler} value={props.newMessageText}></textarea>
                    <button onClick={onClickHandler}>add</button>
                </div>
            </div>
    )
}


export default Dialogs