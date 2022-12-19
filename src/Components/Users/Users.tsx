import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/149071.png";
import {follow, itemType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {UserApi} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    items: itemType[]
    onPageChanged: (p: number) => void
    followFunc: (userId: number) => void
    unFollowFunc: (userIdf: number) => void
    setFollowingInProgress: (isFetching: boolean, id: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(props.followingInProgress)
    return (
        <div>
            <div>
                {pages.map(p => <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
            {props.items.map(el => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small ? el.photos.small : userPhoto} className={s.ava}/>
                        </NavLink>
                    </div>
                    <div>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.setFollowingInProgress(true, el.id)
                                UserApi.unFollowUsers(el.id).then(
                                    response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollowFunc(el.id)
                                        }
                                        props.setFollowingInProgress(false, el.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.setFollowingInProgress(true, el.id)
                                UserApi.followUsers(el.id).then(
                                    response => {
                                        if (response.data.resultCode === 0) {
                                            props.followFunc(el.id)
                                            props.setFollowingInProgress(false, el.id)
                                        }
                                    })
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{'el.location.country'}</div>
                        <div>{'el.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};