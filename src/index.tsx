import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {SamuraiJSApp} from "./App";


const renderEntireTree = () => {
    ReactDOM.render(
      <SamuraiJSApp/>,
        document.getElementById('root')
    );
}

renderEntireTree()

