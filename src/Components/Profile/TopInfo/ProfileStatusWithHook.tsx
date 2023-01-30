import {ChangeEvent, Component, FC, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (title: string | null) => void
}

export const ProfileStatusWithHooks:FC<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => {
        setEditMode(true)
    }

    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


        return <div>
            {editMode ? <input onChange={onChangeHandler} autoFocus onBlur={offEditMode} value={status ? status : ''}/> : <span onDoubleClick={onEditMode}>{status ? status : 'Type your new status'}</span>}
        </div>

}