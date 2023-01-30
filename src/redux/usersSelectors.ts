import {AppReduxType} from "./reduxStore";

export const getItems = (state: AppReduxType) => state.usersPage.items
export const getPageSize = (state: AppReduxType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppReduxType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppReduxType) => state.usersPage.currentPage
export const getIsFetching = (state: AppReduxType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: AppReduxType) => state.usersPage.followingInProgress

