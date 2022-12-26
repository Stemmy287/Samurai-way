import {connect} from "react-redux";
import {AppReduxType} from "../../redux/reduxStore";
import {
    follow,
    unFollowUserThunk,
    getUsersThunk,
    itemType,
    setCurrentPage,
    setFollowingInProgress,
    unFollow, followUserThunk
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    items: itemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type mapDispatchToProps = {
    setCurrentPage: (currentPage: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    unFollowUserThunk: (userId: number) => void
    followUserThunk: (userId: number) => void
}

export type UsersApiPropsType = MapStateToPropsType & mapDispatchToProps

class UsersApiContainer extends React.Component<UsersApiPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.getUsersThunk(p, this.props.pageSize)
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
                    followingInProgress={this.props.followingInProgress}
                    unFollowUserThunk={this.props.unFollowUserThunk}
                    followUserThunk={this.props.followUserThunk}
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
        setCurrentPage,
        getUsersThunk,
        unFollowUserThunk,
        followUserThunk
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps())(UsersApiContainer)