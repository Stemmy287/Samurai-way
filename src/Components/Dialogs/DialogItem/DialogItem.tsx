import React from 'react';
import s from "./dialogsItem.module.scss";
import {NavLink} from "react-router-dom";

type DialogItemTypeProps = {
    name: string
    id: number
    ava: string
}

export const DialogItem = (props: DialogItemTypeProps) => {
    return (
        <div className={s.dialogsItemContainer}>
            <img src={props.ava} alt=""/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


