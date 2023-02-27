import {ChangeEvent, FC, useEffect, useState} from "react";
import s from './profileStatusWithHooks.module.scss'

type ProfileStatusPropsType = {
  status: string | null
  updateStatus: (title: string | null) => void
}

export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (props) => {

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


  return <div className={s.statusContainer}>
    {editMode ? <input onChange={onChangeHandler} autoFocus onBlur={offEditMode} value={status ? status : ''}/> :
      <div className={s.status}><b>Status</b>:<span onDoubleClick={onEditMode}>{status ? status : 'Type your new status'}</span></div>}
  </div>

}