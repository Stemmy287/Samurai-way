import React, {Component, ComponentType} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Friends} from "./Components/Friends/Friends";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import {LoginContainer} from "./Components/Login/LoginContainer";
import {initializeApp} from "./redux/appReducer";
import {AppReduxType, store} from "./redux/reduxStore";
import Preloader from "./Components/common/Preloader/Preloader";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
const Dialogs = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileConatiner"))

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
          <Route path={'/dialogs'} render={() => {
            return <React.Suspense fallback={<Preloader/>}><Dialogs/></React.Suspense>
          }}/>
          <Route path={'/profile/:userId?'} render={() => {
            return <React.Suspense fallback={<Preloader/>}><ProfileContainer/></React.Suspense>
          }}/>
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

let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps()))(App);

export const SamuraiJSApp = () => {

  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>

}
