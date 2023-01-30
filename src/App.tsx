import React, {Component, ComponentType} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Route, withRouter} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Friends} from "./Components/Friends/Friends";
import Dialogs from "./Components/Dialogs/DialogsContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileConatiner";
import {LoginContainer} from "./Components/Login/LoginContainer";
import {initializeApp} from "./redux/appReducer";
import {AppReduxType} from "./redux/reduxStore";
import Preloader from "./Components/common/Preloader/Preloader";
import {compose} from "redux";
import {connect} from "react-redux";

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

const mapDispatchToProps = (): MapDispatchToPropsType => {
    return {
        initializeApp
    }
    
}

const mapStateToProps = (state: AppReduxType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }

}

class App extends Component<PropsType> {
    
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

export default compose<ComponentType>(withRouter, connect(mapStateToProps ,mapDispatchToProps()))(App);
