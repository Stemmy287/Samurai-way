import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppReduxType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserApi} from "../../api/api";

class ProfileApiContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId

        if(!userId) {
            userId = '2'
        }

        UserApi.getProfile(userId).then(
            response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
};

type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type paramsType = {
    userId: string
}

type PropsType = RouteComponentProps<paramsType> & ProfileApiPropsType

type ProfileApiPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppReduxType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {
        setUserProfile
        }

}

const WithUrlDataContainerComponent = withRouter(ProfileApiContainer)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps())(WithUrlDataContainerComponent)


