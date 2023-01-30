import React, {FC} from 'react';
import {itemType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

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
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {items.map(el => <User
                key={el.id}
                user={el}
                followingInProgress={followingInProgress}
                unFollowUserThunk={unFollowUserThunk}
                followUserThunk={followUserThunk}
            />)}
        </div>
    );
};