import React, {FC} from 'react';
import s from './paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator: FC<PaginatorPropsType> = ({
                                                      currentPage,
                                                      pageSize,
                                                      onPageChanged,
                                                      totalUsersCount
}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => <span key={p} className={currentPage === p ? s.selectedPage : ''}
                                      onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>

    );
};