import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Friends} from "./Components/Friends/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileConatiner";
import {HeaderContainer} from "./Components/Header/HeaderContainer";





const App = () => {
    return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                </div>
            </div>
    );
}

export default App;
