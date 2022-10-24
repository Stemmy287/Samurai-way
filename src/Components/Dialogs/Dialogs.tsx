import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemTypeProps = {
    name: string
    id: number
}

type MessageItemTypeProps = {
    message: string
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Sveta'} id={1}/>
                <DialogItem name={'Dima'} id={2}/>
                <DialogItem name={'Valera'} id={3}/>
                <DialogItem name={'Gena'} id={4}/>
                <DialogItem name={'Vova'} id={5}/>
            </div>
            <div className={s.messagesItems}>
                <MessageItem message={'Hello'}/>
                <MessageItem message={'How are you?'}/>
                <MessageItem message={'Hoe'}/>
            </div>
        </div>
    )
}

const DialogItem = (props: DialogItemTypeProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props: MessageItemTypeProps) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}


export default Dialogs