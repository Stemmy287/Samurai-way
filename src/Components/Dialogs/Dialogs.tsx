import s from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogDateType, messageDate, messagePageType} from "../../redux/state";
import {BrowserRouter, Route} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import React, {useState} from "react";

type DialogsPropsType = {
    state: messagePageType

}

const Dialogs = (props: DialogsPropsType) => {



    let dialogsItem = props.state.dialogDate.map(el => <DialogItem ava={el.ava} key={el.id} name={el.name} id={el.id}/>);

    let messagesItem = props.state.messageDate.map( el =>
       <MessageItem key={el.id} message={el.message}/>
    );

    return (
        <BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messagesItems}>
                    <Route path={'/dialogs/1'} render={() => messagesItem}/>
            </div>
        </div>
        </BrowserRouter>
    )
}



export default Dialogs