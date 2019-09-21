import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './Redux/State'
import { BrowserRouter } from 'react-router-dom'

// debugger
export let renderEntireTree = (state) => {
    
        ReactDOM.render( <BrowserRouter>< App state={state} addPost={addPost} /></BrowserRouter> , document.getElementById('root'));


}