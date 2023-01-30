import {connect} from "react-redux";
import {AppReduxType} from "../../redux/reduxStore";
import {followUserThunk, getUsersThunk, itemType, setCurrentPage, unFollowUserThunk} from "../../redux/usersReducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getItems,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";

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

class UsersContainer extends React.Component<UsersApiPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize)
    }

    onPageChanged = (p: number) => {
        const {pageSize} = this.props
        this.props.getUsersThunk(p, pageSize)
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
        items: getItems(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps())
)(UsersContainer)

