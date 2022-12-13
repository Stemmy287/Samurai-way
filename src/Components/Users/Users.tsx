import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/149071.png";
import {itemType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    items: itemType[]
    onPageChanged: (p: number) => void
    followFunc: (userId: number) => void
    unFollowFunc: (userIdf: number) => void
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span key={p} className={props.currentPage === p ? s.selectedPage: ''} onClick={() => props.onPageChanged(p)}>{p}</span>)}
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
                            ? <button onClick={() => {
                                props.followFunc(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.unFollowFunc(el.id)
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