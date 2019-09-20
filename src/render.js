import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import { addPost } from './Redux/State'
import { BrowserRouter } from 'react-router-dom'


export let renderEntireTree = () => {
    
        ReactDOM.render( <BrowserRouter>< App state={state} addPost={addPost} /></BrowserRouter> , document.getElementById('root'));


}