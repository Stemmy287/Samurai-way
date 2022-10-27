import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemTypeProps = {
    name: string
    id: number
    ava: string
}

export const DialogItem = (props: DialogItemTypeProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.ava} alt=""/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}


