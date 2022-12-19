import {connect} from "react-redux";
import {AppReduxType} from "../../redux/reduxStore";
import {
    follow,
    itemType,
    setCurrentPage, setFollowingInProgress,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unFollow
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UserApi} from "../../api/api";

type MapStateToPropsType = {
    items: itemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchToProps = {
    follow: (id: number) => void
    unFollow: (userIdf: number) => void
    setUsers: (users: itemType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    setIsFetching: (fetching: boolean) => void
    setFollowingInProgress: (isFetching: boolean, id: number) => void
}

export type UsersApiPropsType = MapStateToPropsType & mapDispatchToProps

class UsersApiContainer extends React.Component<UsersApiPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        UserApi.getUsers(this.props.currentPage, this.props.pageSize).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setUsersTotalCount(response.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        UserApi.getUsers(p, this.props.pageSize).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    items={this.props.items}
                    onPageChanged={this.onPageChanged}
                    followFunc={this.props.follow}
                    unFollowFunc={this.props.unFollow}
                    setFollowingInProgress={this.props.setFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = (): mapDispatchToProps => {
    return {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setIsFetching,
        setFollowingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps())(UsersApiContainer)