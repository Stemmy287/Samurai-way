import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    ProfileType,
    setStatusThunk,
    setUserProfile,
    updateStatusThunk
} from "../../redux/profileReducer";
import {AppReduxType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = JSON.stringify(this.props.userId)
            if (!this.props.userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(userId)
        this.props.setStatusThunk(userId)
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatusThunk}/>
            </div>
        );
    }
};

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string | null
    userId: number | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getProfileThunk: (userId: string) => void
    setStatusThunk: (userId: string) => void
    updateStatusThunk: (title: string | null) => void
}

type paramsType = {
    userId: string
}

type PropsType = RouteComponentProps<paramsType> & ProfileApiPropsType

type ProfileApiPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppReduxType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {
        getProfileThunk,
        setStatusThunk,
        updateStatusThunk
    }

}

export default compose<ComponentType>(
    //WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps())
)(ProfileContainer)

