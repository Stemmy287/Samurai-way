import React, {FC} from 'react';
import s from "./users.module.scss";
import userPhoto from "../../assets/images/149071.png";
import {itemType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
  user: itemType
  followingInProgress: Array<number>

  unFollowUserThunk: (userId: number) => void
  followUserThunk: (userId: number) => void
}

export const User: FC<UserPropsType> = ({
                                          user,
                                          followingInProgress,
                                          unFollowUserThunk,
                                          followUserThunk
                                        }) => {

  return (

    <div className={s.userContainer}>
      <div>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img alt='' src={user.photos.small ? user.photos.small : userPhoto} className={s.ava}/>
          </NavLink>
        </div>
      </div>
      <div>
        <div>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unFollowUserThunk(user.id)
            }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              followUserThunk(user.id)
            }}>Follow</button>
          }
        </div>
        <div className={s.name}>{user.name}</div>
        <div className={s.status}>{user.status}</div>
      </div>
    </div>
  );
};