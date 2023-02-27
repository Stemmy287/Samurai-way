import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendReducer} from "./friendReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";

export type AppReduxType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendsPage: friendReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store = createStore(reducers, applyMiddleware(thunk))

export type AppThunkDispatchType = ThunkAction<void, AppReduxType, any, AnyAction>

// @ts-ignore
window.store = store

