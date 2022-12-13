import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {friendReducer} from "./friendReducer";
import {usersReducer} from "./usersReducer";

export type AppReduxType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendsPage: friendReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)

