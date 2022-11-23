import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendReducer} from "./friendReducer";


export type ReduxStoreType = typeof store

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    friendsPage: friendReducer
})

export let store = createStore(reducers)

