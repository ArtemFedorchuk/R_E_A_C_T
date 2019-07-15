import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialog from './components/Dialog/Dialog';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


const App = (props) => {

  return (
      <BrowserRouter>
      {console.log(props)}

        <div className="app-wrapper">
          <Header />
          <Navbar />
            <div class="app-wrapper-content">
              <Route path='/dialog' render={(props) => <Dialog arr={props} /> } />
              <Route path='/profile' component={Profile} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Setting} />
            </div>
        </div>
      </BrowserRouter>
  );
}
export default App;
