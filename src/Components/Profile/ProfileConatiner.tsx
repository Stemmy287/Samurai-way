import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppReduxType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

class ProfileApiContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }
        this.props.getProfileThunk(userId)
    }

    render() {

        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
};

type mapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getProfileThunk: (userId: string) => void
}

type paramsType = {
    userId: string
}

type PropsType = RouteComponentProps<paramsType> & ProfileApiPropsType

type ProfileApiPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppReduxType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {
        getProfileThunk
    }

}

const WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps())(WithUrlDataContainerComponent)


