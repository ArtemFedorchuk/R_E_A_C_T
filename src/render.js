import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './Redux/State'
import { BrowserRouter } from 'react-router-dom'
import onChangeText from './Redux/State'

// debugger
export let renderEntireTree = (state) => {
    
        ReactDOM.render( <BrowserRouter>< App state={state} addPost={addPost} onChangeText={onChangeText} /></BrowserRouter> , document.getElementById('root'));


}