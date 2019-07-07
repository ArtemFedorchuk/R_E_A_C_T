import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialog from './components/Dialog/Dialog';


const App = (props) => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
            <div class="app-wrapper-content">
              <Route path='/dialog/' component={Dialog} />
              <Route path='/profile/' component={Profile} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
