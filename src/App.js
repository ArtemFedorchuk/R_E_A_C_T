import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header/Header';
import Navbar from './../src/components/Navbar/Navbar';
import Profile from './../src/components/Profile/Profile';


const App = () => {
  return (
      //<BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
            <div class="app-wrapper-content">
            <Route />
              <Route />
              <Profile />
            </div>
        </div>
      //</BrowserRouter>
  );
}

export default App;
