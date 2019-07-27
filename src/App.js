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
import Friends from './components/Friends/Friends'


const App = (props) => {

  return (
      <BrowserRouter>

        <div className="app-wrapper">
          <Header />
          <Navbar />
            <div class="app-wrapper-content">
              {/* <Route path='/dialog' render={() => <Dialog test='true'/>}/> */}
              <Route path='/dialog' render={ () => <Dialog {...props} /> } />
              <Route path='/profile' component={Profile} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Setting} />
              <Route path='/friends' component={Friends} />
            </div>
        </div>
        
      </BrowserRouter>
      
  );
}
export default App;
