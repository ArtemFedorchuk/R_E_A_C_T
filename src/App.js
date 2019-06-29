import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header';
import Navbar from './../src/components/Navbar';
import Profile from './../src/components/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
