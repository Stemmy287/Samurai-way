import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {ActionType, stateType} from "./redux/state";
import {Friends} from "./Components/Friends/Friends";


type AppPropsType = {
    state: stateType
    dispatch: (action: ActionType) => void
}

const App = (props: AppPropsType) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar state={props.state.friendsPage}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'} render={() => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                </div>
            </div>
    );
}

export default App;
