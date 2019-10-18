import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/State';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './Redux/State'
import {Provider} from 'react-redux'
import store from './Redux/Redux-store';



// let renderEntireTree = (state) => {

// debugger
    ReactDOM.render(<BrowserRouter>
                        <Provider store={store}>
                            < App state={state} /*sdispatch={store.dispatch.bind(store)} store={store}*/ />
                        </Provider>
                    </BrowserRouter>, document.getElementById('root'));

// }


// renderEntireTree(store._state)
// store.subscribe(renderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()