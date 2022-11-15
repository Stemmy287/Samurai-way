import React from 'react';
import './index.css';
import {stateType, store} from "./redux/state";

import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = (stateArg?: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={store._state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscriber(renderEntireTree)

