import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    ProfileType,
    savePhotoThunk, saveProfileThunk, setIsEdit,
    setStatusThunk,
    updateStatusThunk
} from "../../redux/profileReducer";
import {AppReduxType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileDataFormType} from "./TopInfo/profileDataForm/ProfileDataForm";

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = JSON.stringify(this.props.userId)
            if (!this.props.userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(+userId)
        this.props.setStatusThunk(+userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div>
                <Profile
                  isEdit={this.props.isEdit}
                  isOwner={!this.props.match.params.userId}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatusThunk}
                  savePhoto={this.props.savePhotoThunk}
                  saveProfile={this.props.saveProfileThunk}
                  setIsEdit={this.props.setIsEdit}
                />
            </div>
        );
    }
}

type mapStateToPropsType = {
    profile: ProfileType
    status: string | null
    userId: number | null
    isAuth: boolean
    isEdit: 'none' | 'successes'
}

type mapDispatchToPropsType = {
    getProfileThunk: (userId: number) => void
    setStatusThunk: (userId: number) => void
    updateStatusThunk: (title: string | null) => void
    savePhotoThunk:(img: File) => void
    saveProfileThunk: (profile: ProfileDataFormType) => void
    setIsEdit: (isEdit: 'none' | 'successes') => void
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
        isAuth: state.auth.isAuth,
        isEdit: state.profilePage.isEdit
    }
}

const mapDispatchToProps = (): mapDispatchToPropsType => {
    return {
        getProfileThunk,
        setStatusThunk,
        updateStatusThunk,
        savePhotoThunk,
        saveProfileThunk,
        setIsEdit
    }

}

export default compose<ComponentType>(
    //WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps())
)(ProfileContainer)

