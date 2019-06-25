import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js';
import Footer from './footer';

const App = () => {
  return (
    <div class="App-header">
      <div><Header /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
