import React from 'react';
import './index.css';
import {ReduxStoreType, store} from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const renderEntireTree = (stateArg: ReduxStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={stateArg}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store)

store.subscribe(() => renderEntireTree(store))

