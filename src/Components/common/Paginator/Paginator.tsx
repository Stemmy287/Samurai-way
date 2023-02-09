import React, {FC, useState} from 'react';
import s from './paginator.module.css'

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (p: number) => void
  portionSize: number
}

export const Paginator: FC<PaginatorPropsType> = ({
                                                    currentPage,
                                                    pageSize,
                                                    onPageChanged,
                                                    totalItemsCount,
                                                    portionSize
                                                  }) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize)

  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount  = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPagePortionNumber = (portionNumber - 1) * portionSize + 1
  let rightPagePortionNumber = portionNumber * portionSize

  return (
    <div>
      {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
      }
      {pages.filter(p => p >= leftPagePortionNumber && p <= rightPagePortionNumber).map(p => <span key={p} className={currentPage === p ? s.selectedPage : ''}
                            onClick={() => onPageChanged(p)}>{p}</span>)}
      {portionCount > portionNumber &&
      <button onClick={() => {setPortionNumber( portionNumber + 1)}}>NEXT</button>
      }
    </div>
  );
};