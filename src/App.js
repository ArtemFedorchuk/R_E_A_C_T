import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
  // debugger

  return (

        <div className="app-wrapper">
          <Header />
          <Navbar {...props} />
            <div className="app-wrapper-content">
              <Route path='/dialog' render={ () => <Dialog {...props} /> } />
              <Route path='/profile' render={ () => <Profile {...props} addPost={props.addPost} />} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/setting' component={Setting} />
              <Route path='/friends' render={ () => <Friends friendsArr={props.state.navbar.friends} />} />
            </div>
        </div>
        
      
  ); 
}
export default App;
