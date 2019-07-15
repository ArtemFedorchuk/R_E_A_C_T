import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Массив диалогов
let DialogArr = [
    { id: 1, name: 'Vasso' },
    { id: 2, name: 'Murces' },
    { id: 3, name: 'Adriano' },
    { id: 4, name: 'Victor' }
];

// Массив сообщений
let MessageArr = [
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus, deserunt unde impedit.' },
    { text: 'Hello my friend Artem.' },
    { text: 'Lomnis suscipit, fugit et earum quae neque necessitatibus velit magni?.' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
];

ReactDOM.render( < App dialogArr={DialogArr} messageArr={MessageArr} / > , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()