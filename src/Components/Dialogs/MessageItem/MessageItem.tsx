import React from 'react';
import s from "../Dialogs.module.css";

type MessageItemTypeProps = {
    message: string
}

export  const MessageItem = (props: MessageItemTypeProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

