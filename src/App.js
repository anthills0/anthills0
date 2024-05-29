// src/App.js

import React from 'react';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import './css/cover.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <CallToAction/>
      </div>
  );
}

export default App;
