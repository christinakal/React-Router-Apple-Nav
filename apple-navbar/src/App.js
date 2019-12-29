import React from 'react';
import Home from './components/Home.js';
import Mac from './components/Mac.js';
import Ipad from './components/Ipad.js';
import Iphone from './components/Iphone.js';
import Watch from './components/Watch.js';
import Tv from './components/Tv.js';
import Music from './components/Music.js';
import Support from './components/Support.js';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/">
          <Home />
      </Route>
      <Route path="/mac">
        <Mac />
      </Route>
      <Route path="/ipad">
        <Ipad />
      </Route>
      <Route path="/iphone">
        <Iphone />
      </Route>
      <Route path="/watch">
        <Watch />
      </Route>
      <Route path="/tv">
        <Tv />
      </Route>
      <Route path="/music">
        <Music />
      </Route>
      <Route path="/support">
        <Support />
      </Route>
    </div>
  );
}

export default App;
