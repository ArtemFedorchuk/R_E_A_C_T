import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import { addPost } from './Redux/State'
import {BrowserRouter, Route} from 'react-router-dom';
import {renderEntireTree} from './render'

// addPost('hey how are you')

renderEntireTree()
    // ReactDOM.render( <BrowserRouter>< App state={state} addPost={addPost} /></BrowserRouter>,document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()