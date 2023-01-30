import React, {FC} from 'react';
import s from "./users.module.css";
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

        <div>
            <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} className={s.ava}/>
                        </NavLink>
                    </div>
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
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
        </div>
    );
};