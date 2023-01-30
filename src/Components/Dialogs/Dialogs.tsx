import s from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import React from 'react'
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsFormRedux, DialogsFormType} from "./DialogsForm";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.dialogs.map(el => <DialogItem ava={el.ava} key={el.id} name={el.name}
                                                                          id={el.id}/>);
    let messagesItem = props.messages.map(el =>
        <MessageItem key={el.id} message={el.message}/>
    );

    const AddNewMessage = (value: DialogsFormType) => {
        props.addMessage(value.addMessage)
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItem}
                </div>
                <div className={s.messagesItems}>
                     <div>{messagesItem}</div>
                    <DialogsFormRedux onSubmit={AddNewMessage}/>
                </div>
            </div>
    )
}


export default Dialogs