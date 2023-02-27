import React, {FC} from 'react';
import {itemType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from './usersContainer.module.scss'

type UsersPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  items: itemType[]
  onPageChanged: (p: number) => void
  followingInProgress: Array<number>
  unFollowUserThunk: (userId: number) => void
  followUserThunk: (userId: number) => void
}

export const Users: FC<UsersPropsType> = ({
                                            currentPage,
                                            onPageChanged,
                                            totalUsersCount,
                                            pageSize,
                                            items,
                                            followingInProgress,
                                            unFollowUserThunk,
                                            followUserThunk,
                                            ...props
                                          }) => {

  return (
    <div className={s.usersContainer}>
      <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize} portionSize={10}/>
      </div>
      <div className={s.user}>
        {items.map(el => <User
          key={el.id}
          user={el}
          followingInProgress={followingInProgress}
          unFollowUserThunk={unFollowUserThunk}
          followUserThunk={followUserThunk}
        />)}
      </div>
    </div>
  );
};