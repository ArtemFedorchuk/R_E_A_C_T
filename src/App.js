import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import {Route} from 'react-router-dom';
import Dialog from './components/Dialog/Dialog';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';// import News from './components/News/News';

import Friends from './components/Friends/Friends'; 
import UsersContainer from './components/Users/UsersContainer';
import NewsC from "./components/News/NewsC";



const App = (props) => {
  // debugger

  return (

        <div className="app-wrapper">
          <Header />
          <Navbar {...props} />
            <div className="app-wrapper-content">
              <Route path='/dialog' render={ () => <Dialog {...props} store={props.store}/> } />
              <Route path='/profile' render={ () => <Profile {...props} /*dispatch={props.dispatch} store={props.store}*//>} />
              <Route path='/news' render={() => <NewsC /*store={props.store}*/ />}/>
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Setting} />
              <Route path='/users' component={UsersContainer} />
              <Route path='/friends' render={ () => <Friends friendsArr={props.state._state.navbar.friends} />} />
            </div>
        </div>
  );
  
};
export default App;
