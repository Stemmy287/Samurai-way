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
import {ReduxStoreType} from "./redux/reduxStore";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: ReduxStoreType
}

const App = (props: AppPropsType) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar store={props.store}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                </div>
            </div>
    );
}

export default App;
